import {PageHeader, PageTitle} from "@/app/(main)/_components/PageHeader";
import db from "@/lib/db";
import {Card} from "@prisma/client";

export default async function CardPage() {
  const cards = await db.card.findMany();

  return (
    <>
      <PageHeader>
        <PageTitle>Cards</PageTitle>
      </PageHeader>

      {!cards.length ? (
        <p>There are no cards</p>
      ) : cards.map((card: Card) => {
        return (
          <p key={card.id}>{card.name}</p>
        )
      })}
    </>
  )
}
