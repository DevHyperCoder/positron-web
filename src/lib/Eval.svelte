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

<div class="container">
{#each variableValues as varVal}
	<input bind:value={varVal.name} />
	<input type="range" min="0" max="1" bind:value={varVal.value} />
{/each}
<button class="new-var" on:click={addNewVarVal}>Add New Variable and Value</button>

<button class="resbtn" on:click={getResult}>Get Result!</button>

{#if error}
	<p>{error}</p>
{:else}
	<p>Result is: {exprResult}</p>
{/if}
</div>

<style>
.container {
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
}
.new-var {
	width: fit-content;
	height: 4.5rem;
	border: none;
	border-radius: 34px;
	color: white;
	background-color: #B15DC7;
	font-family: 'Darker Grotesque', sans-serif;
	font-size: 1.4rem;
}	

.resbtn {
	width: fit-content;
	height: 5rem;
	margin-top: 2rem;
	background: #C75D69;
	border: none;
	border-radius: 34px;
	font-family: 'Darker Grotesque' sans-serif;
	font-size: 1.4rem;
	color: white;

}

input {
	width: 30%;
	background: #C4D1C6;
	border-radius: 34px;
	height: fit-content;
	border: none;
	font-family: 'Darker Grotesque', sans-serif;
	font-size: 1.2rem;
	padding: 1rem;
}

p {
	font-family: 'Darker Grotesque', sans-serif;
	font-size: 1.3rem;
	font-weight: 600;
	color: white;
}

@media(max-width: 320px) {
	.new-var {
		width: fit-content;	
		font-size: 1rem;
	}	

	.resbtn {
		width: fit-content;
		font-size: 1rem;
		height: 3rem;
	}
}

@media(max-width: 375px) {
	.new-var {
		
	}
}

</style>
