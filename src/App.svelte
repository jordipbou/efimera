<script>
import Editor from './Editor.svelte'
import Toolbar from './Toolbar.svelte'

let full_screen = true;	// or split screen
let editor_hidden = false;

function toggleEditor() {
	editor_hidden = !editor_hidden;
}

function toggleViewMode() {
	full_screen = !full_screen;
}

function handleKeydown(e) {
	if (e.ctrlKey && e.shiftKey) {
		switch (e.keyCode) {
			case 80: toggleEditor(); break;
			case 77: toggleViewMode(); break;
			case 76: console.clear(); break;
		}
	}
}
</script>

<style>
.full-screen {
	@apply absolute top-0 left-0 w-full h-full;
}

.split-screen {
	@apply relative w-1/2 h-full;
}

.editor-full {
	@apply z-10 opacity-75;
}
</style>

<svelte:window on:keydown={handleKeydown}/>

<main class="w-screen h-screen flex flex-row">
	<div class:full-screen={ full_screen } 
		 class:editor-full={ full_screen } 
		 class:split-screen={ !full_screen } 
		 class:hidden={ editor_hidden }>
		<Editor/>
	</div>
	<div id="preview" 
		 class:full-screen={ full_screen }
		 class:split-screen={ !full_screen }>
	</div>
	<div class="absolute top-0 right-0 z-20">
		<Toolbar columns={ !full_screen } 
				 on:hideEditor={ toggleEditor }
				 on:changeViewMode={ toggleViewMode }/>
	</div>
</main>
