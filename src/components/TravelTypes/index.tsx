import { Flex } from "@chakra-ui/react";
import { Card } from "./card";

export function TravelTypes() {
  return (
    <Flex
      justifyContent={{sm: "Center", md: "space-evenly"}}
      w="100%"
      alignItems="center"
      flexWrap="wrap"
      maxWidth={{sm: "360px", md: "400px", lg: "1160px"}}
      h={145}
      m="0 auto"
      marginTop="20"
    >
      <Card src="/Cocktail.svg" alt="Vida" text="vida noturna" justifyItem="left" />
      <Card src="/Surf.svg" alt="Vida" text="praia" justifyItem="flex-end" />
      <Card src="/Building.svg" alt="Vida" text="moderno" justifyItem="left" />
      <Card src="/Museum.svg" alt="Vida" text="clássico" justifyItem="flex-end" />
      <Card src="/Earth.svg" alt="Vida" text="e mais..." justifyItem="center" />
    </Flex>
  )
}