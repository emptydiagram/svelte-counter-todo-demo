import { writable } from 'svelte/store';

function createCounterStore() {
  let { subscribe, update, set } = writable(0);
  return {
    subscribe,
    inc: () => update(n => n + 1),
    dec: () => update(n => n - 1),
    reset: () => set(0),
  }
}

function createTodoStore() {
  let { subscribe, update } = writable({
    editingItem: null,
    editingItemText: '',
    newItemText: '',
    items: [
      { text: 'one', completed: false },
      { text: 'two to too', completed: false },
      { text: 'threeve', completed: false }
    ],
  });

  return {
    subscribe,
    toggleItemCompleted: (i) => update(store => {
      store.items[i].completed = !store.items[i].completed
      return store;
    }),
    editItem: (i) => update(store => {
      store.editingItem = i;
      store.editingItemText = store.items[i].text;
      return store;
    }),
    cancelEditingItem: () => update(store => {
      store.editingItem = null;
      return store;
    }),
    saveEditingItemText: (newText) => update(store => {
      store.editingItemText = newText;
      return store;
    }),
    saveItemText: (i) => update(store => {
      //store.items = [...store.items];
      //store.items[i] = { ...store.items[i] };
      store.items[i].text = store.editingItemText;
      store.editingItem = null;
      console.log("saving for i = ", i, store);
      return store;
    }),
    saveNewItemText: (newText) => update(store => {
      store.newItemText = newText;
      return store;
    }),
    createNewItem: () => update(store => {
      store.items.push({ text: store.newItemText, completed: false });
      store.newItemText = '';
      return store;
    })
  }
}

export const counterStore = createCounterStore();
export const todoStore = createTodoStore();