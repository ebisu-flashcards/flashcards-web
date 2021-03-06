<script context="module" lang="ts">
import { getDeck } from "$lib/api/decks";
import type { LoadInput } from "@sveltejs/kit/types/page";
import { getNextCard } from "$lib/api/study";

export async function load({ fetch, page }: LoadInput) {
  const { id } = page.params;
  const [deck, card] = await Promise.all([
    getDeck(fetch, id),
    getNextCard(fetch, id),
  ]);

  return {
    props: {
      deck,
      card,
    },
  };
}
</script>

<script lang="ts">
import Page from "$lib/components/Page.svelte";
import Loading from "$lib/components/utility/Loading.svelte";
import FlatButton from "$lib/components/inputs/buttons/FlatButton.svelte";
import RoundLinkButton from "$lib/components/inputs/buttons/RoundLinkButton.svelte";

import { getNextCardByPrevious } from "$lib/api/study";
import type { DeckModel } from "$lib/models/deck";

import Fa from "svelte-fa";
import { faStickyNote, faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import type { CardModel } from "$lib/models/card";

export let deck: DeckModel;
export let card: CardModel;
let loading = false;
let hidden = true;

async function handleAnswer(remembered: boolean) {
  hidden = true;
  loading = true;
  card = await getNextCardByPrevious(fetch, deck.id, card.id, remembered);
  loading = false;
}
</script>

<Page>
  <!-- Breadcrumbs content -->
  <div class="breadcrumbs" slot="breadcrumbs">
    <a class="underline text-gray-600" href="/decks">DECKS</a>
    <span>&gt;</span>
    <span>{deck.name}</span>
  </div>

  <!-- Button slot -->
  <div class="flex gap-4" slot="buttons">
    <RoundLinkButton color="indigo" href="{`/card/${card.id}/edit`}">
      <Fa icon="{faStickyNote}" slot="icon" />
      <span>Edit card</span>
    </RoundLinkButton>
    <RoundLinkButton color="indigo" href="{`/deck/${deck.id}/edit`}">
      <Fa icon="{faLayerGroup}" slot="icon" />
      <span>Edit deck</span>
    </RoundLinkButton>
  </div>

  <!-- Main content -->
  <main
    class="flex-col-container justify-center text-center items-stretch w-full">
    {#if loading}
      <Loading>Loading next card</Loading>
    {:else}
      <div class="flex-col-container justify-center gap-y-8">
        <!-- FIXME: Division looks like, if the top part would be taller then the botton, as the header is white -->
        <!-- Question part -->
        <span class="text-2xl">
          {card.question.content.toString()}
        </span>
        <div class="flex flex-row w-full justify-center gap-2">
          {#each card.question.tags as tag}
            <span class="bg-gray-100 border border-gray-300 px-2 py-1 rounded"
              >{tag}</span>
          {/each}
        </div>

        <!-- Divider -->
        <hr class="self-stretch border-b border-dashed mx-8" />

        <!-- Answer part -->
        <span class="text-2xl transition-opacity" class:opacity-0="{hidden}">
          {card.answer.content.toString()}
        </span>
        <div
          class="flex flex-row w-full justify-center gap-2 transition-opacity"
          class:opacity-0="{hidden}">
          {#each card.answer.tags as tag}
            <span class="bg-gray-100 border border-gray-300 px-2 py-1 rounded"
              >{tag}</span>
          {/each}
        </div>
      </div>

      {#if hidden}
        <FlatButton color="green" on:click="{() => (hidden = false)}">
          SHOW ANSWER
        </FlatButton>
      {:else}
        <div class="flex w-full">
          <FlatButton
            color="green"
            style="flex-grow"
            on:click="{async () => await handleAnswer(true)}">
            REMEMBERED
          </FlatButton>
          <FlatButton
            color="red"
            style="flex-grow"
            on:click="{async () => await handleAnswer(false)}">
            FORGOT
          </FlatButton>
        </div>
      {/if}
    {/if}
  </main>
</Page>
