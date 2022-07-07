<script>
	import { onMount } from 'svelte';
	import { searchValue } from '../stores/store.js';

	let drugs = [];
	let searchedDrugs = [];

	$: if ($searchValue && drugs) {
		searchedDrugs = drugs.filter((drug) => drug.toLowerCase().includes($searchValue.toLowerCase()));
	} else {
		searchedDrugs = drugs;
	}

	onMount(() => {
		fetch('/drugs.json')
			.then((res) => res.json())
			.then((data) => (drugs = data.drugs));
	});
</script>

<table class="w-full table-auto overflow-x-scroll md:table-fixed">
	<thead>
		<tr class=" text-left">
			<th class="font-medium text-gray-900">Name</th>
			<th class="font-medium text-gray-900">Price <span class="text-gray-400">(in Le)</span></th>
			<th class="font-medium text-gray-900">In Stock</th>
		</tr>
	</thead>
	<tbody>
		{#each searchedDrugs as drug}
			<tr>
				<td class="py-2">{drug}</td>
				<td class="py-2">10</td>
				<td class="py-2">1</td>
			</tr>
		{/each}
	</tbody>
</table>
