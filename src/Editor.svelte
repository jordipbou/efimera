<script context="module">
let cm

export function getContent() {
	return cm.doc.getValue()
}

export function setContent(content) {
	cm.doc.setValue(content)
}
</script>

<script>
import { onMount } from 'svelte';
import CodeMirror from 'codemirror/lib/codemirror.js';
import 'codemirror/mode/javascript/javascript.js';
import 'codemirror/addon/hint/show-hint.js';
import 'codemirror/addon/hint/javascript-hint.js';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/mbo.css';
import 'codemirror/addon/hint/show-hint.css';

let editor

onMount(() => {
	setTimeout(() => {
		cm = CodeMirror(
			editor,
			{
				lineNumbers: true,
				mode: {
					name: 'javascript',
					globalVars: true
				},
				theme: 'mbo',
				extraKeys: {
					"Ctrl-Space": "autocomplete",
					"Ctrl-Enter": function(cm) {
						// Evaluate current selection or current line
						// if no selection is present.
						let sel = cm.doc.getSelection();
						let txt;
						if (sel === '') {
							let line = cm.doc.getCursor().line;
							txt = cm.doc.getLine(line);
						} else {
							txt = sel;
						}

						console.log(window.eval(txt));
					},
					"Ctrl-Alt-Enter": function(cm) {
						// Evaluate current selection as AudioWorklet
						let sel = cm.doc.getSelection();
						let txt;
						if (sel === '') {
							let line = cm.doc.getCursor().line;
							txt = cm.doc.getLine(line);
						} else {
							txt = sel;
						}

						console.log('Evaluating audio worklet...')
						console.log(window.ctx.audioWorklet.addModule('data:text/javascript,'+encodeURI(txt)));
					}
				}
			});
		}, 250);
});
</script>

<style>
:global(.CodeMirror) {
	height: 100% !important;
}
</style>

<div bind:this={editor} class="w-full h-full bg-gray-400">
</div>
