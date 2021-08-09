<script lang="ts">
    export let color: string;
    export let inProgress: boolean = false;
</script>

<button class="leading-10 
            font-bold text-gray-800 
            bg-{color}-300 hover:bg-{color}-400 
            transition-colors 
            w-full"
        class:barberpole={inProgress}
        on:click
>
    <slot />
</button>