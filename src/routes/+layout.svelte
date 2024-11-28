<script lang="ts">
	import '../app.css';
	import '@fortawesome/fontawesome-free/css/all.min.css'
	import {Nav, Navbar, NavbarBrand, NavLink} from "@sveltestrap/sveltestrap";

	let { children } = $props();
</script>
<Navbar class="py-0" color="dark" dark>
	<NavbarBrand href="/">cta4j</NavbarBrand>
	<Nav>
		<NavLink class="text-white" href="/trains">
			<i class="fa-solid fa-train-subway"></i>
		</NavLink>
		<NavLink class="text-white" href="/buses">
			<i class="fa-solid fa-bus-simple"></i>
		</NavLink>
		<NavLink class="text-white" href="/holiday">
			🎅
		</NavLink>
		<NavLink class="text-white" href="https://buymeacoffee.com/cta4j" target="_blank">
			<i class="fa-solid fa-mug-hot"></i>
		</NavLink>
		<NavLink class="text-white" href="mailto:admin@cta4j.app">
			<i class="fa-solid fa-envelope"></i>
		</NavLink>
	</Nav>
</Navbar>
{@render children()}
