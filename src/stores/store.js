import { writable } from 'svelte/store';

export let drugsStore = writable([]);
export let searchValue = writable('');
