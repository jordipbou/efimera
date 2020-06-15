<script>
import BlockInput from './BlockInput.svelte'
import BlockOutput from './BlockOutput.svelte'

import { createEventDispatcher } from 'svelte';
const dispatch = createEventDispatcher();

export let id 

let result
</script>

<svelte:options accessors/>

<div>
  <BlockInput on:result={ (evt) => result = evt.detail }
              on:new_block={ (evt) => dispatch ('new_block', id) }/>
  <BlockOutput result={id}/>
</div>
