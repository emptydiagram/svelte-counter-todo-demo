<script>
  import { counterStore } from './stores.js';
</script>

<main>
  <h2>{$counterStore}</h2>

  <button on:click={counterStore.inc}>+</button>
  <button on:click={counterStore.dec}>-</button>
  <button on:click={counterStore.reset}>reset</button>
</main>
