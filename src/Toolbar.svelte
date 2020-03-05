<script>
import { createEventDispatcher } from 'svelte';
const dispatch = createEventDispatcher();

export let columns;

function hideEditor() {
	dispatch('hideEditor', undefined);
}

function changeViewMode() {
	dispatch('changeViewMode', undefined);
}
</script>

<style>
</style>

<div class="flex flex-row">
	<a href="javascript:void(0);" on:click="{ changeViewMode }">
		<i class="text-orange-500 fa mr-2" 
			class:fa-columns={!columns}
			class:fa-clone={columns}></i>
	</a>
	<a href="javascript:void(0);" on:click="{ hideEditor }">
		<i class="text-orange-500 fa fa-circle mr-2"></i>
	</a>
</div>
