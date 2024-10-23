<script lang="ts">
    export let onSubmit: (event: Event) => void
</script>

<form on:submit|preventDefault={onSubmit} method="post" class="bg-[#171929] w-full max-w-[390px] px-10 py-11 rounded-[27px] flex flex-col items-center gap-[38px] shadow-[0px_0px_50px_0px_rgba(0,0,0,0.7)]">
    <h1 class="text-lg leading-[120%] text-white text-center w-full max-w-[238px]">
        For business enquiries please use the form below
    </h1>
    <slot />
</form>