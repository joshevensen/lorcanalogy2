import type {Card, PrismaClient} from "@prisma/client";
// import {Layout} from "@prisma/client";
import type {CARD} from "./data/data.types";

// for (const card of set1Cards) {
//   await cardSeeder(prisma, 1, card)
// }
//
// for (const card of set2Cards) {
//   await cardSeeder(prisma, 2, card)
// }
//
// for (const card of set3Cards) {
//   await cardSeeder(prisma, 3, card)
// }
//
// for (const card of set4Cards) {
//   await cardSeeder(prisma, 4, card)
// }
//
// for (const card of set5Cards) {
//   await cardSeeder(prisma, 5, card)
// }
//
// for (const card of set6Cards) {
//   await cardSeeder(prisma, 6, card)
// }
//
// for (const card of set7Cards) {
//   await cardSeeder(prisma, 7, card)
// }

// export default function CardSeeder(prisma: PrismaClient, setId: number, dataCard: CARD) {
  // const card = mapCard(dataCard)
  //
  // return prisma.card.upsert({
  //   where: {
  //     setId_number: {
  //       setId: setId,
  //       number: dataCard.collector_number
  //     }
  //   },
  //   update: card,
  //   create: card,
  // })
// }

// function mapCard(card: CARD): Card {
  // const removeLetters = parseInt(dataCard.collector_number);
  // const backToString = String(removeLetters);
  // const cardNumberWithZeros = backToString.padStart(3, '0');
  // const setNumber = parseInt(String(setId) + cardNumberWithZeros)
  //
  // let fullName = dataCard.name;
  // if (dataCard.version) fullName += `, ${dataCard.version}`;
  //
  // const ink1 = dataCard.inks?.length ? camelCase(dataCard.inks[0]) : camelCase(String(dataCard.ink));
  // const ink2 = dataCard.inks && (dataCard.inks[1] ? camelCase(dataCard.inks[1]) : null);
  //
  // const rarity = camelCase(dataCard.rarity);
  //
  // const typeString = camelCase(dataCard.type.join(''));
  // // const type = typeString === 'actionSong' ? 'song' : typeString;
  //
  // const layout = camelCase(dataCard.layout);
  //
  // return {
  //   set_id: setId,
  //   set_card_number: setNumber,
  //   tcg_player_id: dataCard.tcgplayer_id || null,
  //   number: dataCard.collector_number,
  //   name: dataCard.name,
  //   version: dataCard.version || null,
  //   full_name: fullName,
  //   inkable: dataCard.inkwell,
  //   cost: dataCard.cost,
  //   lore: dataCard.lore,
  //   strength: dataCard.strength,
  //   willpower: dataCard.willpower,
  //   movement: dataCard.move_cost,
  //   text: convertTextToHTML(dataCard.text),
  //   image: dataCard.image_uris.digital.normal,
  //   illustrators: dataCard.illustrators || [],
  //   layout: Layout[layout as keyof typeof Layout],
  //   is_banned: false
  // }
// }

// function convertTextToHTML(text: string | null): string {
//   if (!text) return '';
//
//   const newText = text.replace(/\r?\n/g, '</p> <p>')
//     .replace(/(\([^)]*\))/g, ``) // Remove keyword explanations
//     .replaceAll('{I}', 'Ink')
//     .replaceAll('{E}', 'Exert')
//     .replaceAll('{L}', 'Lore')
//     .replaceAll('{S}', 'Strength')
//     .replaceAll('Bodyguard', '<strong class="uppercase">$&</strong>')
//     .replaceAll('Challenger', '<strong class="uppercase">$&</strong>')
//     .replaceAll('Evasive', '<strong class="uppercase">$&</strong>')
//     .replaceAll('Reckless', '<strong class="uppercase">$&</strong>')
//     .replaceAll('Resist', '<strong class="uppercase">$&</strong>')
//     .replaceAll('Rush', '<strong class="uppercase">$&</strong>')
//     .replaceAll('Shift', '<strong class="uppercase">$&</strong>')
//     .replaceAll('Singer', '<strong class="uppercase">$&</strong>')
//     .replaceAll('Sing Together', '<strong class="uppercase">$&</strong>')
//     .replaceAll('Support', '<strong class="uppercase">$&</strong>')
//     .replaceAll('Vanish', '<strong class="uppercase">$&</strong>')
//     .replaceAll('Ward', '<strong class="uppercase">$&</strong>')
//     .replace(/\b[A-Z]+\b/g, `<span class="text-[110%] font-bold">$&</span>`) // All Caps
//     .replace(/\r?\n/g, '</p> <p>'); // Line Brakes
//
//   return `<p>${newText}</p>`
// }
