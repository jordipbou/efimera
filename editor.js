<hello-world>
 Hello {planet}
</hello-world>

<script src=//unpkg.com/snuggsi></script>
<script>
Element `hello-world`

(class extends HTMLElement {
	onclick () { alert (this.textContent) }
	get planet() { return 'world !' }
})
</script>
