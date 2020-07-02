<script>
  import { link } from 'svelte-spa-router';
  import { count } from './stores.js';
</script>

<main>
  <h2>{$count}</h2>
  <a href="/" use:link>&lt; go back</a>

  <button on:click={count.inc}>+</button>
  <button on:click={count.dec}>-</button>
  <button on:click={count.reset}>reset</button>
</main>
