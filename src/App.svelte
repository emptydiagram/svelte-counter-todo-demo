<script>
  export let name;

  import Router from 'svelte-spa-router';

  import Counter from './Counter.svelte';
  import Hello from './Hello.svelte';

  const routes = {
    '/': Hello,
    '/counter': Counter,
  };
</script>

<body>
  <h1>Hello {name}!</h1>
  <Router {routes} />
</body>

<style>
  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }
</style>