<script>
  import { todoStore } from './stores.js';
</script>

<main>
  <h2>Todo</h2>

  <input
    type="text"
    on:change={(ev) => todoStore.saveNewItemText(ev.target.value)}
    value={$todoStore.newItemText}
  />
  <button on:click={todoStore.createNewItem}>Save</button>

  <ul>
    {#each $todoStore.items as item, i}
      <li>
        <input
          type="checkbox"
          checked={item.completed}
          on:input={() => todoStore.toggleItemCompleted(i)}
        />
        {#if $todoStore.editingItem !== i}
          <span on:dblclick={() => todoStore.editItem(i)}>
            {#if item.completed}
              <strike>{item.text}</strike>
            {:else}
              {item.text}
            {/if}
          </span>
        {:else}
          <input
            type="text"
            on:change={(ev) => todoStore.saveEditingItemText(ev.target.value)}
            value={$todoStore.editingItemText}
          />
          <button on:click={() => todoStore.saveItemText(i)}>Save</button>
          <button on:click={todoStore.cancelEditingItem}>Cancel</button>
        {/if}
      </li>
    {/each}
  </ul>

</main>
