import { Flex } from "@chakra-ui/react";
import { Card } from "./card";

export function TravelTypes() {
  return (
    <Flex
      justifyContent="space-between"
      textAlign="right"
      w={{sm: "360px", lg: "100%"}}
      alignItems="center"
      flexWrap="wrap"
      maxWidth={1160}
      h={145}
      m="0 auto"
      marginTop="20"
    >
      <Card src="/Cocktail.svg" alt="Vida" text="vida noturna" />
      <Card src="/Surf.svg" alt="Vida" text="praia" />
      <Card src="/Building.svg" alt="Vida" text="moderno" />
      <Card src="/Museum.svg" alt="Vida" text="clássico" />
      <Card src="/Earth.svg" alt="Vida" text="e mais..." />
    </Flex>
  )
}