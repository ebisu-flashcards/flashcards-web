<script lang="ts">
export let href: string;
export let color: string;

let extraClasses: string;
</script>

<a
  class="flex items-center gap-2
        py-1.5 px-4 rounded-xl 
        bg-{color}-300 font-medium shadow-sm
        transition-colors 
        hover:bg-{color}-500 hover:text-white
        {extraClasses}"
  href="{href}">
  <!-- Icon slot -->
  <slot name="icon" class="mr-2" />

  <!-- Default content slot -->
  <slot />
</a>
