/*
 * positron-web - Web interface to positron-api
 * Copyright (C) 2021 DevHyperCoder
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import { evalUrl, truthUrl } from './env';
import type { TruthEntry, VariableValue } from './types';

export async function getTruthData(expr: string) {
	const data = {
		expr
	};

	if (expr.length === 0) {
		throw Error('Expression can not be empty!');
	}

	const res = await fetch(truthUrl, {
		method: 'POST',
		body: JSON.stringify(data)
	});

	const json = await res.json();

	if (json.error) {
		throw new Error(json.error);
	}

	let exprResult: TruthEntry[] = json;

	if (exprResult.length <= 0) {
		throw Error(`Empty Truth Table`);
	}

	let keys = Object.keys(exprResult[0].data);
	keys.sort();

	let tableData: boolean[][] = [];

	for (let entry of exprResult) {
		let row: boolean[] = [];
		console.log({ entry });
		for (const key of keys) {
			row.push(entry.data[key]);
		}
		row.push(entry.result);
		console.log({ row });
		tableData.push(row);
	}

	keys.push('Result');

	return {
		keys,
		tableData
	};
}

export async function getEvalResult(
	expr: string,
	variableValues: VariableValue[]
): Promise<boolean> {
	if (expr.length === 0) {
		throw Error('Expression can not be empty!');
	}
	if (variableValues.length === 0) {
		throw Error('VariableValue array can not be empty!');
	}

	let varVals = {};

	variableValues.forEach((varVal) => {
		varVals[varVal.name] = varVal.value === 0 ? false : true;
	});

	const data = {
		expr,
		variable_values: varVals
	};

	const res = await fetch(evalUrl, {
		method: 'POST',
		body: JSON.stringify(data)
	});

	const json = await res.json();
	if (json.error) {
		throw Error(json.error);
	}

	return json.result;
}
