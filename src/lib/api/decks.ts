import type { SvelteFetch } from "$lib/api/index";
import type { DeckModel } from "$lib/models/deck";

export async function getDecks(fetch: SvelteFetch): Promise<DeckModel[]> {
  const response = await fetch(`http://localhost:3000/api/decks`);
  return response.json();
}

export async function getDeck(
  fetch: SvelteFetch,
  deckId: string
): Promise<DeckModel> {
  const response = await fetch(`http://localhost:3000/api/deck/${deckId}`);
  return response.json();
}

export async function getDeckCards(
  fetch: SvelteFetch,
  deckId: string
): Promise<DeckModel> {
  const response = await fetch(
    `http://localhost:3000/api/deck/${deckId}/cards`
  );
  return response.json();
}
