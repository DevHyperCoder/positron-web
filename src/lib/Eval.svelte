<!--
 positron-web - Web interface to positron-api
 Copyright (C) 2021 DevHyperCoder

 This program is free software: you can redistribute it and/or modify
 it under the terms of the GNU General Public License as published by
 the Free Software Foundation, either version 3 of the License, or
 (at your option) any later version.

 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU General Public License for more details.

 You should have received a copy of the GNU General Public License
 along with this program.  If not, see <https://www.gnu.org/licenses/>.
-->

<script lang="ts">
	import { getEvalResult } from './api';
	import type { VariableValue } from './types';

	export let expr: string;

	let variableValues: VariableValue[] = [];
	let exprResult: boolean | null;
	let error: string;

	function addNewVarVal() {
		variableValues = [...variableValues, { name: '', value: 0 }];
	}

	async function getResult() {
		try {
			exprResult = await getEvalResult(expr, variableValues);
		} catch (e) {
			error = e.message;
		}
	}
</script>

{#each variableValues as varVal}
	<hr />
	<input bind:value={varVal.name} />
	<input type="range" min="0" max="1" bind:value={varVal.value} />
{/each}
<hr />
<button on:click={addNewVarVal}>Add New Variable and Value</button>

<hr />
<button on:click={getResult}>Get Result!</button>

{#if error}
	<p>{error}</p>
{:else}
	<p>Result is: {exprResult}</p>
{/if}
