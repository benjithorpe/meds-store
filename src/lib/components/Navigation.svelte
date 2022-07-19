<script>
	import { isAuthenticated } from '../store.js';
</script>

<header class="sticky top-0 mb-5">
	<nav class="flex justify-between border-b py-5">
		<!-- Logo -->
		<a href="/" class="block font-sans text-2xl text-gray-700">Learning Journal</a>

		<!-- Menu Items -->
		<div class="flex gap-5">
			<a href="/" class="font-sans text-blue-600 hover:underline">Home</a>
			{#if $isAuthenticated}
				<a href="/topics" class="font-sans text-blue-600 hover:underline">Topics</a>
				<a href="/api/logout" class="font-sans text-blue-600 hover:underline">logout</a>
			{:else}
				<a href="/auth/login" class="font-sans text-blue-600 hover:underline">Login</a>
				<a href="/auth/register" class="font-sans text-blue-600 hover:underline">Register</a>
			{/if}
		</div>
	</nav>
</header>
