import {PageHeader, PageTitle} from "@/app/(main)/_components/PageHeader";
import db from "@/lib/db";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/card";
import {Set, Franchise} from '@prisma/client'

export default async function InfoPage() {
  const sets = await db.set.findMany();
  const franchises = await db.franchise.findMany();

  return (
    <>
      <PageHeader>
        <PageTitle>Lorcana Info</PageTitle>
      </PageHeader>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Sets</CardTitle>
          </CardHeader>

          <CardContent>
            {sets.map((set: Set) => (
              <div key={set.id}>{set.name}</div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Franchises</CardTitle>
          </CardHeader>

          <CardContent>
            {franchises.map((franchise: Franchise) => (
              <div key={franchise.id}>{franchise.name}</div>
            ))}
          </CardContent>
        </Card>
      </div>
    </>
  )
}
