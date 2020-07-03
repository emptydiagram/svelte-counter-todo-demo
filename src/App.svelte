<script>
  export let name;

  import { link } from 'svelte-spa-router';
  import Router from 'svelte-spa-router';

  import Counter from './Counter.svelte';
  import Hello from './Hello.svelte';
  import TodoList from './TodoList.svelte';

  const routes = {
    '/': Hello,
    '/counter': Counter,
    '/todo': TodoList,
  };
</script>

<body>
  <h1>Hello {name}!</h1>
  <nav>
    <ul>
      <li><a href="/" use:link>hello</a></li>
      <li><a href="/counter" use:link>counter</a></li>
      <li><a href="/todo" use:link>todo list</a></li>
    </ul>
  </nav>
  <Router {routes} />
</body>

<style>
  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 2em;
    font-weight: 100;
  }
</style>