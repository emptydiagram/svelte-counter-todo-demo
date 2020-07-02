<script>
  import { link } from "svelte-spa-router";
</script>

<style>
  h1 {
    color: green;
  }
</style>

<main>
  <h1>Hail and well met</h1>
  <ul>
    <li>
      <a href="/counter" use:link>counter</a>
    </li>
  </ul>
</main>
