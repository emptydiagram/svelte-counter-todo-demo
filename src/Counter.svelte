<script>
  import {link} from 'svelte-spa-router'

  let count = 0;

  function inc() {
    count += 1;
  }
  function dec() {
    count -= 1;
  }
</script>

<main>
  <h2>{count}</h2>
  <a href="/" use:link>&lt; go back</a>

  <button on:click={inc}>+</button>
  <button on:click={dec}>-</button>
</main>
