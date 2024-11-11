<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>
<div class="p-2 flex justify-between">
	<h1>cta4j</h1>
	<nav>
		<a href="/trains">TRAINS</a>
		<a href="/buses">BUSES</a>
		<a href="mailto:admin@cta4j.app">CONTACT</a>
	</nav>
</div>
{@render children()}
