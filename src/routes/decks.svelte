<script lang="ts">
    import { getDecks } from "$lib/api";
    import Deck from "$lib/components/page/decks/Deck.svelte";
    import RoundLinkButton from "$lib/components/inputs/buttons/RoundLinkButton.svelte";
    import Page from "$lib/components/Page.svelte";
    import Loading from "$lib/components/utility/Loading.svelte";

    import Fa from "svelte-fa";
    import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
</script>

<svelte:head>
    <title>Ebisu - Decks</title>
</svelte:head>

<Page>
    <!-- Breadcrumb slot -->
    <div class="breadcrumbs" slot="breadcrumbs">
        <span>DECKS</span>
    </div>

    <!-- Button slot -->
    <div class="flex gap-4" slot="buttons">
        <!-- New deck button -->
        <RoundLinkButton color="indigo" href="/deck/new">
            <Fa icon={faLayerGroup} />
            <span>New deck</span>
        </RoundLinkButton>
        <!-- Logout button -->
        <RoundLinkButton color="red" href="/logout">
            <span>Logout</span>
        </RoundLinkButton>
    </div>
    <!-- Main content -->
    <main class="flex-grow flex">
        {#await getDecks()}
            <div class="flex-grow flex flex-col justify-center">
                <Loading>Loading decks</Loading>
            </div>
        {:then decks}
            <div
                class="flex-grow grid items-stretch gap-8
                lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 auto-rows-max 
                py-4 px-8"
            >
                {#each decks as deck}
                    <Deck {deck} />
                {/each}
            </div>
        {/await}
    </main>
</Page>
