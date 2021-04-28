import { Box, Flex, Image, Text } from "@chakra-ui/react";


export function TravelTypes() {

  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      w="100%"
      maxWidth={1160}
      h={145}
      m="0 auto"
      marginTop="20"
    >
      <Flex
        flexDirection={{sm: "row", lg: "column"}}
        alignItems="center"
        justifyContent="space-between"
        w={165}
        h={145}
      >
        <Image
          src="/Cocktail.svg"
          alt="Vida"
          display={{sm: "none", lg: "block"}}
        />
        <Box
          w="8px"
          h="8px"
          borderRadius="50%"
          bg="#FFBA08"
          display={{sm: "block", lg: "none"}}
        />
        <Text
          fontWeight={600}
          fontSize="2xl"
          textAlign="center"
          lineHeight="34px"
          color="gray.500"
          weight={{sm: "160px"}}
        >
          vida noturna
        </Text>
      </Flex>
      <Flex
        flexDirection="column"
        alignItems="center"
        justifyContent="space-between"
        w={165}
        h={145}
      >
        <img src="/Surf.svg" alt="Vida"/>
        <Text
          fontWeight={600}
          fontSize="2xl"
          textAlign="center"
          lineHeight="34px"
          color="gray.500"
        >
          praia
        </Text>
      </Flex>
      <Flex
        flexDirection="column"
        alignItems="center"
        justifyContent="space-between"
        w={165}
        h={145}
      >
        <img src="/Building.svg" alt="Vida"/>
        <Text
          fontWeight={600}
          fontSize="2xl"
          textAlign="center"
          lineHeight="34px"
          color="gray.500"
        >
          moderno
        </Text>
      </Flex>
      <Flex
        flexDirection="column"
        alignItems="center"
        justifyContent="space-between"
        w={165}
        h={145}
      >
        <img src="/Museum.svg" alt="Vida"/>
        <Text
          fontWeight={600}
          fontSize="2xl"
          textAlign="center"
          lineHeight="34px"
          color="gray.500"
        >
          clássico
        </Text>
      </Flex>
      <Flex
        flexDirection="column"
        alignItems="center"
        justifyContent="space-between"
        w={165}
        h={145}
      >
        <img src="/Earth.svg" alt="Vida"/>
        <Text
          fontWeight={600}
          fontSize="2xl"
          textAlign="center"
          lineHeight="34px"
          color="gray.500"
        >
          e mais...
        </Text>
      </Flex>
    </Flex>
  )
}