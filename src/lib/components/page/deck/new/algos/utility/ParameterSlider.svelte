<script lang="ts">
    import SectionHeader from "$lib/utility/SectionHeader.svelte";

    export let id: string;
    export let name: string;
    export let unit: string = '';

    export let min: number;
    export let max: number;
    export let step: number;
    export let value: number;
</script>

<div class="flex-col-container gap-y-2">
    <label for={id}>
        <SectionHeader style="text-xl">
            {name} &rightarrow; {value}{unit}
        </SectionHeader>
    </label>
    <input bind:value={value}
           class="flex-grow"
           id={id}
           max={max}
           min={min}
           step={step}
           type="range">
</div>