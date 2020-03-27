<script>
import { createEventDispatcher } from 'svelte';
const dispatch = createEventDispatcher();

export let columns;

function hideEditor() {	dispatch('hideEditor', undefined); }
function changeViewMode() {	dispatch('changeViewMode', undefined); }
function openFileBrowser() { dispatch('openFileBrowser', undefined); }
function openFileSaveDialog() { dispatch('openFileSaveDialog', undefined); }
function initMidiWithSysex() { 
	RxMidi.init(true);
}
</script>

<style>
</style>

<div class="flex flex-row">
	<a href="javascript:void(0);" on:click={initMidiWithSysex}>
		<i class="text-orange-500 fa fa-rocket mr-2"></i>
	</a>
	<a href="javascript:void(0);" on:click={openFileSaveDialog}>
		<i class="text-orange-500 fa fa-save mr-2"></i>
	</a>
	<a href="javascript:void(0);" on:click={openFileBrowser}>
		<i class="text-orange-500 fa fa-folder-o mr-2"></i>
	</a>
	<a href="javascript:void(0);" on:click={changeViewMode}>
		<i class="text-orange-500 fa mr-2" 
			class:fa-columns={!columns}
			class:fa-clone={columns}></i>
	</a>
	<a href="javascript:void(0);" on:click={hideEditor} alt="Toggle editor visibility">
		<i class="text-orange-500 fa fa-circle mr-2"></i>
	</a>
</div>
