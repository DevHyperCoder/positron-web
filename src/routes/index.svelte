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
	import Eval from '$lib/Eval.svelte';
	import Truth from '$lib/Truth.svelte';
	import Navbar from './navbar.svelte'

	// Logical expression
	let expr: string;
	let reqType: 'truth' | 'eval' = 'truth';
</script>


<div class="container">
<Navbar />
<div class="header">


<!-- Input -->
<input class="expr" type="text" bind:value={expr} />

<!-- Btn Group -->
<div class="tabs">
<h1 class="btn" on:click={() => (reqType = 'truth')}>Truth Table</h1>
<h1 class="btn" on:click={() => (reqType = 'eval')}>Evaluate</h1>
</div>
</div>

{#if reqType === 'truth'}
	<Truth {expr} />
{:else}
	<Eval {expr} />
{/if}
</div>

<style>
@import url('https://fonts.googleapis.com/css2?family=Darker+Grotesque:wght@600&display=swap');

.container {
	display: flex;
	flex-direction: column;
}

.header {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 1.2rem;
	flex-direction: column;
}

.btn {
	font-family: 'Darker Grotesque', monospace;
	font-size: 2rem;
	color: white;
}



.expr {
	width: 30%;
	background: #C4D1C6;
	border-radius: 34px;
	height: 5vh;
	border: none;
	font-family: 'Darker Grotesque', sans-serif;
	font-size: 2.2rem;
	padding: 1rem;
}

.tabs {
	display: flex;
	flex-direction: row;
	align-items: center;
		width: 50vw;
		height: auto;
		justify-content: space-evenly;
	background-color: #28282b;
	border-radius: 34px;
	margin-top: 5rem;
	padding: 1rem;
}

@media(max-width: 320px) {
	.container {
		display: flex;
		flex-direction: column;
		width: 100vw;
		height: fit-content;
	}	

	.header {
		display: flex;
		align-items: center;
		justify-content: space-around;
		padding: 1rem;
		max-width: 100vw;
		flex-direction: column;

	}
	.btn {
		width: 10vw;
		border-radius: 48px;
		border: none;
		color: white;
		font-family: 'Darker Grotesque', monospace;
		font-size: 1.3rem;
		height: fit-content;
		background-color: inherit;
	}
	.expr {
		width: 80vw;
		background: #C4D1C6;
		border-radius: 34px;
		height: fit-content;
		border: none;
		font-size: 1rem;
	}

	.tabs {
		width: 50vw;
		height: auto;
		justify-content: space-evenly;
	}
	.tabs h1 {
		font-size: 1rem;
	}
}

@media(max-width: 375px) {
	.tabs h1 {
		font-size: 1rem;
	}
	.expr {
		width: 80vw;
		background: #C4D1C6;
		border-radius: 34px;
		height: fit-content;
		border: none;
		font-size: 1rem;
	}
}
@media(max-width: 425px) {
	.tabs h1 {
		font-size: 1rem;
	}
	.expr {
		width: 80vw;
		background: #C4D1C6;
		border-radius: 34px;
		height: fit-content;
		border: none;
		font-size: 1rem;
	}
}
</style>
