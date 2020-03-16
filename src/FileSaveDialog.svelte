<script>
import { createEventDispatcher } from 'svelte';
const dispatch = createEventDispatcher();

export let filename

function hideFileSaveDialog() { dispatch('hideFileSaveDialog', undefined); }
function saveFile() {
	dispatch('saveFile', undefined)
}

function filenameChanged() {
	dispatch('filenameChanged', filename)
}
</script>

<style>
</style>

<div class="w-full h-full flex justify-center items-center">
	<div class="bg-orange-600 p-3 rounded">
		<input type="text" bind:value={filename}/>
		<button	class="bg-blue-600 p-3" on:click={saveFile}>
			Save
		</button>
		<button	class="bg-blue-600 p-3" on:click={hideFileSaveDialog}>
			Discard
		</button>
	</div>
</div>
