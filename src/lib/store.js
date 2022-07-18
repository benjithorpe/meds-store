import { readable } from 'svelte/store';

export const topics = readable([
	{
		id: 1,
		name: 'Chess',
		entries: [
			{
				id: 1,
				text: 'Hello World',
				dateAdded: 'July 10, 2022'
			},
			{
				id: 2,
				text: 'Entry text',
				dateAdded: 'July 12, 2022'
			}
		]
	},
	{
		id: 2,
		name: 'Rock Climbing',
		entries: []
	}
]);
