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
	import { getTruthData } from './api';
	export let expr: string;

	let error: string;

	let tableData: boolean[][] = [];
	let keys: string[] = [];

	async function getResult() {
		try {
			const result = await getTruthData(expr);

			keys = result.keys;
			tableData = result.tableData;
		} catch (e) {
			error = e.message;
		}
	}
</script>

<div class="container">
<button on:click={getResult}>Get Result!</button>
{#if error}
	<p>{error}</p>
{:else if keys.length > 0}
	<p>Got result</p>
	<table>
		<thead>
			{#each keys as key}
				<th>
					<p>{key}</p>
				</th>
			{/each}
		</thead>
		<tbody>
			{#each tableData as row}
				<tr>
					{#each row as item}
						<td><p>{item}</p></td>
					{/each}
				</tr>
			{/each}
		</tbody>
	</table>
{/if}
</div>
<style>
	button {
		
	width: 25vw;
	height: 5rem;
	margin-top: 2rem;
	background: #C75D69;
	border: none;
	border-radius: 34px;
	font-family: 'Darker Grotesque' sans-serif;
	font-size: 1.4rem;
	color: white;

	}
.container {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100vw;
	flex-direction: column;
}

table {
	background-color: #2b2c36; 
	width: 75vw;
}

p {
	font-family: 'Darker Grotesque', monospace;
	font-size: 1.2rem;
	color: white;
}
@media(max-width: 320px) {
	button {
	width: 55vw;
	height: 2.5rem;
	margin-top: 2rem;
	background: #C75D69;
	border: none;
	border-radius: 34px;
	font-family: 'Darker Grotesque' sans-serif;
	font-size: 1.4rem;
	color: white;

	}
}
@media(max-width: 375px) {
	button {
		width: fit-content;
	}
}
</style>

