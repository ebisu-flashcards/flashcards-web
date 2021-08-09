<script lang="ts">
    import { fade } from "svelte/transition";

    let extraClasses: string;
    let expanded = false;

    function handleExpand(event: MouseEvent) {
        expanded = !expanded;
    }
</script>

<div class="rounded-2xl bg-indigo-50 text-indigo-500 py-2 px-4 w-full {extraClasses}">
    <div class="flex items-center justify-between cursor-pointer font-bold"
         on:click={handleExpand}>
        <slot name="title" />
        <span>{@html expanded ? '&lsh;' : '&ldsh;'}</span>
    </div>

    {#if expanded}
        <div in:fade>
            <hr class="w-full border-b border-indigo-500 my-1" />
            <slot name="explanation" />
        </div>
    {/if}
</div>