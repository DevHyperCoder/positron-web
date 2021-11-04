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

	// Logical expression
	let expr: string;
	let reqType: 'truth' | 'eval' = 'truth';
</script>

<input type="text" bind:value={expr} />

<hr />

<!-- Btn Group -->
<button on:click={() => (reqType = 'truth')}>Truth Table</button>
<button on:click={() => (reqType = 'eval')}>Evaluate</button>

{#if reqType === 'truth'}
	<Truth {expr} />
{:else}
	<Eval {expr} />
{/if}
