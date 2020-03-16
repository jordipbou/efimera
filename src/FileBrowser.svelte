<script>
import { onMount, createEventDispatcher } from 'svelte';
const dispatch = createEventDispatcher();

export let files;

function hideFileBrowser() { dispatch('hideFileBrowser', undefined); }

function loadFile(filename) {
	let contents = window.localStorage.getItem(filename)
	if (contents !== null) {
		dispatch('loadFile', [ filename, contents ])
	}
}

function deleteFile(filename) {
	dispatch('removeFile', filename)
}
</script>

<style>
</style>

<div class="w-full h-full flex justify-center items-center"
	on:click={hideFileBrowser}>
	<div class="bg-orange-200 p-2 rounded">
		{#if files.length > 0}
			<ul>
				{#each files as filename}
					<li>
						<a href="#" on:click|preventDefault={loadFile(filename)}>
							{filename}
						</a>
						<a href="#" on:click|preventDefault={deleteFile(filename)}>
							<i class="fa fa-trash-o"></i>
						</a>
					</li>
				{/each}
			</ul>
		{:else}
			<span>No saved files</span>
		{/if}
	</div>
</div>
