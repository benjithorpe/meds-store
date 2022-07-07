<script>
	import Search from './Search.svelte';
</script>

<header class="sticky top-0 mb-5 bg-slate-200">
	<div class="container mx-auto grid max-w-6xl justify-center p-2">
		<h1 class="text-center text-2xl text-gray-800">Meds Store</h1>
		<p class="mb-7 text-center italic text-gray-600">A list of pharmaceutical drug names</p>
		<!-- Search box to check for a medicine -->
		<Search />
	</div>
</header>
