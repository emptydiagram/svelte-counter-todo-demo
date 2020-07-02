import { writable } from 'svelte/store';

function createCount() {
  let { subscribe, update, set } = writable(0);
  return {
    subscribe,
    inc: () => update(n => n + 1),
    dec: () => update(n => n - 1),
    reset: () => set(0),
  }
}

export const count = createCount();