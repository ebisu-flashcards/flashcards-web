import type { SvelteFetch } from "$lib/api/index";
import type { CardModel } from "$lib/models/card";

export async function getNextCard(
  fetch: SvelteFetch,
  deckId: string
): Promise<CardModel> {
  const response = await fetch(
    `http://localhost:3000/api/study/${deckId}/next`
  );
  return response.json();
}

export async function getNextCardByPrevious(
  fetch: SvelteFetch,
  deckId: string,
  cardId: string | null,
  result: any
): Promise<CardModel> {
  const body = {
    cardId,
    result,
  };
  const response = await fetch(
    `http://localhost:3000/api/study/${deckId}/next`,
    {
      method: "POST",
      body: JSON.stringify(body),
    }
  );
  return response.json();
}
