import {Card, CardContent, CardHeader, CardTitle} from "@/components/card";
import Lorcanalogy from "@/app/_components/Lorcanalogy";
import DisneyLorcana from "@/app/_components/DisneyLorcana";

export default function Disclaimer() {
  return (
    <Card className={'max-w-3xl'}>
      <CardHeader>
        <CardTitle>Disclaimer</CardTitle>
      </CardHeader>

      <CardContent className={'space-y-4'}>
        <p className={'text-xs'}><Lorcanalogy/> uses trademarks and/or copyrights associated with <DisneyLorcana/>, used under Ravensburger’s
          Community Code Policy. We are expressly prohibited from charging you to use or access this content.
          <Lorcanalogy/> <strong>is not published, endorsed, or specifically approved by Disney or Ravensburger</strong>. For more
          information about <DisneyLorcana/>, visit https://www.disneylorcana.com/en-US/. </p>

        <p className={'text-xs'}>Also, this content comes from multiple sources around the internet. It's not all mine. I try to give credit
          where credit is due, but sometimes I forget where I came across the information.</p>
      </CardContent>
    </Card>
  )
}