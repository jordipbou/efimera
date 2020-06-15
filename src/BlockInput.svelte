<script>
import { onMount } from 'svelte';

import CodeMirror from 'codemirror/lib/codemirror.js';
import 'codemirror/mode/javascript/javascript.js';
import 'codemirror/addon/hint/show-hint.js';
import 'codemirror/addon/hint/javascript-hint.js';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/mbo.css';
import 'codemirror/addon/hint/show-hint.css';

import { createEventDispatcher } from 'svelte';
const dispatch = createEventDispatcher();

let cm
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
          "Shift-Enter": (cm) => {
            console.log ('dispatching for new block')
            dispatch ('new_block')
          },
					"Ctrl-Enter": function (cm) {
            // Evaluate current block
						//let sel = cm.doc.getSelection();
						//let txt;
						//if (sel === '') {
						//	let line = cm.doc.getCursor().line;
						//	txt = cm.doc.getLine(line);
						//} else {
						//	txt = sel;
						//}
            let txt = cm.doc.getValue ()

						dispatch ('result', window.eval (txt))
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

						dispatch ('Info', 'Evaluating audio worklet...')
            dispatch (
              'result', 
              window.ctx.audioWorklet.addModule(
                'data:text/javascript,' + encodeURI(txt)));
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

<div bind:this={editor} class=".w-full .h-4 .bg-orange-800">
</div>
