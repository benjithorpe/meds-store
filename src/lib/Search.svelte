<script>
	import { searchValue } from '../stores/store.js';
</script>

<div class="w-full">
	<input
		type="search"
		class="block w-full rounded-md p-3 text-gray-700 shadow-lg"
		placeholder="Search for a medicine"
		bind:value={$searchValue}
	/>
</div>
