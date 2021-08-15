<script lang="ts">
export var id: string;

export let styles = "";

/**
 * Controls whenever the input is valid
 */
export let valid = true;
/**
 * Validation error message, only displayed when valid is false
 */
export let validationError: string;
export let placeholder: string;
</script>

<div class="flex flex-col {styles}">
  <input
    id="{id}"
    class:border-red-800="{!valid}"
    placeholder="{placeholder}"
    on:input />
  <!--{validationError ? <span className="text-base animate-pulse text-red-500">{validationError}</span> : null}-->
  {#if !valid}
    <span class="text-base animate-pulse text-red-500">
      {validationError}
    </span>
  {/if}
</div>
