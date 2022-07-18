<script>
	// placeholder until the api is implemented
	const isAuthenticated = false;
</script>

<header class="sticky top-0 mb-5">
	<nav class="flex justify-between py-5 border-b">
		<!-- Logo -->
		<a href="/" class="block text-2xl font-sans text-gray-700">Learning Journal</a>

		<!-- Menu Items -->
		<div class="flex gap-5">
			{#if isAuthenticated}
				<a href="/topics" class="font-sans text-blue-600 hover:underline">Topics</a>
				<a href="/" class="font-sans text-blue-600 hover:underline">logout</a>
			{:else}
				<a href="/" class="font-sans text-blue-600 hover:underline">Home</a>
				<a href="/auth/login" class="font-sans text-blue-600 hover:underline">Login</a>
				<a href="/auth/register" class="font-sans text-blue-600 hover:underline">Register</a>
			{/if}
		</div>
	</nav>
</header>
