<script lang="ts">
    export let extraClasses: string;
</script>

<div class="flex-row-container items-center gap-4 {extraClasses}">
    <slot />
    <hr class="flex-grow border-b" />
</div>