<script lang="ts">
export let selected: any;
export let value: any;
export let checked = false;

$: updateRadio(selected, value);

function updateRadio(selected: any, value: any) {
  checked = selected === value;
}
</script>

<label
  class="flex-grow text-center select-none cursor-pointer bg-indigo-200 py-2 transition-colors"
  class:bg-indigo-500="{checked}"
  class:text-white="{checked}">
  <input
    bind:group="{selected}"
    class="hidden"
    on:click
    type="radio"
    value="{value}" />
  <slot />
</label>
