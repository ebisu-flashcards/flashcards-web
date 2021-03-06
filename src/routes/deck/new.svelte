<script lang="ts">
import Page from "$lib/components/Page.svelte";
import ValidatingInput from "$lib/components/inputs/ValidatingInput.svelte";
import { parameterDetails } from "$lib/components/page/deck/new/algos";
import Toggle from "$lib/components/inputs/Toggle.svelte";
import FlatButton from "$lib/components/inputs/buttons/FlatButton.svelte";
import SectionHeader from "$lib/components/utility/SectionHeader.svelte";

import type { SvelteComponent } from "svelte";

// Parameters ----------------------------------------------------------------

// Form state ----------------------------------------------------------------

let submitting = false;

let nameIsValid = true;
let deckName = "";
let selectedAlgorithm: SvelteComponent;

// Validation functions ------------------------------------------------------

function validateDeckName(event: Event) {
  deckName = (event.target as HTMLInputElement).value;
  nameIsValid = deckName.length > 0;
}

function handleSubmit(event: MouseEvent) {
  console.log("Submitting...");
  submitting = true;
}
</script>

<Page small>
  <!-- Breadcrumbs content -->
  <div class="breadcrumbs" slot="breadcrumbs">
    <a class="underline text-gray-600" href="/decks">DECKS</a>
    <span>&gt;</span>
    {#if deckName.length > 0}
      <span>{deckName}</span>
    {:else}
      <!-- FIXME: overflow-ellipsis does not work in here -->
      <span class="overflow-ellipsis">NEW DECK</span>
    {/if}
  </div>

  <!-- Main content -->
  <form class="flex-col-container" on:submit|preventDefault>
    <div class="flex-col-container align-top px-6 py-4 gap-y-6">
      <!-- Deck name -->
      <div class="flex flex-col gap-y-4">
        <SectionHeader style="font-bold text-xl">DECK NAME</SectionHeader>
        <ValidatingInput
          id="deck-name"
          on:input="{validateDeckName}"
          placeholder="Give the deck a name!"
          valid="{nameIsValid}"
          validationError="Name should not be empty" />
      </div>

      <!-- Algorithm selector -->
      <div class="flex flex-col gap-y-2">
        <SectionHeader style="font-bold text-xl">ALGORITHMS</SectionHeader>
        <div>
          <p class="text-base text-gray-800">
            Select your algorithm, which will select the new cards for you!
          </p>
          <p class="text-gray-500">
            (Don't worry about this too much, you can edit it later!)
          </p>
        </div>
        <div class="flex items-stretch rounded-2xl shadow-sm overflow-hidden">
          {#each parameterDetails as param}
            <Toggle
              bind:selected="{selectedAlgorithm}"
              value="{param.component}">
              {param.name}
            </Toggle>
          {/each}
        </div>
      </div>

      <!-- Algorithm options -->
      <div class="flex-col-container">
        <svelte:component this="{selectedAlgorithm}" />
      </div>
    </div>

    <!-- Save button -->
    <FlatButton
      color="green"
      inProgress="{submitting}"
      on:click="{handleSubmit}">
      {#if !submitting}
        CREATE NEW DECK
      {:else}
        SAVING DECK...
      {/if}
    </FlatButton>
  </form>
</Page>
