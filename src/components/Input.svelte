<script lang="ts">
	export let id: string;
	export let label: string;
    export let value:string;
	export let required: boolean = false;
	export let error: string | undefined;
	export let type: "email" | "text";

	function inputType(node:HTMLInputElement) {
		node.type = type;
	}
</script>

<div class="w-full relative">
	<div class="border-b border-[rgb(63_67_99)] text-[#797EA3] focus-within:border-white focus-within:text-white transition-colors duration-300">
		<label for={id} class="font-light text-[15px]">{label} {required ? '*' : ''}</label>
		<input id={id} use:inputType bind:value class="w-full outline-none bg-inherit caret-white text-white" required={required}>
	</div>
	{#if error}
		<p class="text-red-500 text-[15px] absolute">{error}</p>
	{/if}
</div>

