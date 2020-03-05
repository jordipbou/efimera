<script>
import Editor from './Editor.svelte'
import Toolbar from './Toolbar.svelte'

let editor_full_screen = true;
let editor_hidden = false;
let preview_full_screen = true;
</script>

<style>
.editor_full_screen {
	@apply absolute top-0 left-0 w-full h-full z-10 opacity-75;
}

.editor_hidden {
	@apply hidden;
}

.preview_full_screen {
	@apply absolute top-0 left-0 w-full h-full z-0 opacity-25;
}
</style>

<main class="w-screen h-screen">
	<div class:editor_full_screen class:editor_hidden>
		<Editor/>
	</div>
	<div id="preview" class:preview_full_screen>
	</div>
	<div class="absolute top-0 right-0 z-20">
		<Toolbar on:hideEditor={() => { editor_hidden = !editor_hidden }}/>
	</div>
</main>
