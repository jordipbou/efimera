<script>
import { onMount } from 'svelte';
import Editor, { getContent, setContent } from './Editor.svelte'
import Toolbar from './Toolbar.svelte'
import FileBrowser from './FileBrowser.svelte'
import FileSaveDialog from './FileSaveDialog.svelte'

let editor

let full_screen = true	// or split screen
let editor_hidden = false
let file_browser_hidden = true
let file_save_dialog_hidden = true

let current_filename = 'untitled.js'

let files = []

function listFiles() {
	let json_files = window.localStorage.getItem('files')
	if (json_files !== null) {
		files = JSON.parse(json_files)
	}
}

onMount(() => {
	listFiles()
})

function toggleEditor() {
	editor_hidden = !editor_hidden
}

function toggleViewMode() {
	full_screen = !full_screen
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

function openFileBrowser() {
	if (file_browser_hidden) {
		file_browser_hidden = false
	}
}

function hideFileBrowser() {
	if (!file_browser_hidden) {
		file_browser_hidden = true
	}
}

function openFileSaveDialog() {
	if (file_save_dialog_hidden) {
		file_save_dialog_hidden = false
	}
}

function hideFileSaveDialog() {
	if (!file_save_dialog_hidden) {
		file_save_dialog_hidden = true
	}
}

function saveFile() {
	let content = getContent(editor)
	window.localStorage.setItem(current_filename, content)
	if (!files.includes(current_filename)) {
		files = files.concat(current_filename)
		window.localStorage.setItem('files', JSON.stringify(files))
	}
	file_save_dialog_hidden = true
}

function removeFile(event) {
	let filename = event.detail
	window.localStorage.removeItem(filename)
	files = files.filter(i => i !== filename)
	window.localStorage.setItem('files', JSON.stringify(files))
}

function loadFile(event) {
	current_filename = event.detail[0]
	setContent(event.detail[1])
}

function filenameChanged(filename) {
	current_filename = filename
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
	<div class:full-screen={full_screen} 
		 class:editor-full={full_screen} 
		 class:split-screen={!full_screen} 
		 class:hidden={editor_hidden}>
		<Editor bind:this={editor}/>
	</div>
	<div id="preview" 
		 class:full-screen={full_screen}
		 class:split-screen={!full_screen}>
	</div>
	<div class="absolute top-0 right-0 z-20">
		<Toolbar columns={!full_screen} 
				 on:hideEditor={toggleEditor}
				 on:changeViewMode={toggleViewMode}
				 on:openFileBrowser={openFileBrowser}
				 on:openFileSaveDialog={openFileSaveDialog}/>
	</div>
	<div class="w-full h-full z-50"
		 class:hidden={file_browser_hidden}>
		<FileBrowser bind:files
					 on:hideFileBrowser={hideFileBrowser}
					 on:removeFile={removeFile}
					 on:loadFile={loadFile}/>
	</div>
	<div class="w-full h-full z-50"
		 class:hidden={file_save_dialog_hidden}>
		<FileSaveDialog bind:filename={current_filename}
					    on:hideFileSaveDialog={hideFileSaveDialog}
						on:saveFile={saveFile}
						on:filenameChanged={filenameChanged}/>
	</div>
</main>
