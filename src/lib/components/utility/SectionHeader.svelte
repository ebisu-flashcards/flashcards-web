<script lang="ts">
    export let style: string;
    export let centered: boolean = false;
</script>

<div class="flex-row-container items-center gap-4 {style}">
    <!-- Optional left rule -->
    {#if centered}
        <hr class="flex-grow border-b" />
    {/if}

    <!-- Content of the section header -->
    <slot />

    <!-- Right rule -->
    <hr class="flex-grow border-b" />
</div>