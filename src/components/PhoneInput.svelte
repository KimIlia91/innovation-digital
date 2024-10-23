<script lang="ts">
	export let label: string
    export let value:string
	export let required: boolean = false
	export let error: string | undefined

	function handleInput(event: Event) {
		const input = event.target as HTMLInputElement
		
		if (input.value.startsWith('+')) {
			input.value = '+' + input.value.slice(1).replace(/[^0-9]/g, '')
		} else {
			input.value = input.value.replace(/[^0-9]/g, '')
		}
		value = input.value
	}
</script>

<div class="w-full relative">
	<div class="border-b border-[rgb(63_67_99)] text-[#797EA3] focus-within:border-white focus-within:text-white transition-colors duration-300">
		<label for='phone' class="font-light text-[15px]">{label} {required ? '*' : ''}</label>
		<input id='phone' type="tel" on:input={handleInput} bind:value class="w-full outline-none bg-inherit caret-white text-white" required={required} />
	</div>
	{#if error}
		<p class="text-red-500 text-[15px] absolute">{error}</p>
	{/if}
</div>