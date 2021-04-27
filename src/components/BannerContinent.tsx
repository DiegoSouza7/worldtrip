import { Box, Flex, Text } from "@chakra-ui/react";


export function BannerContinent() {
  return (
    <Box
      backgroundImage="url('/Europ.png')"
      bgPosition="center"
      bgRepeat="no-repeat"
      w="100%"
      h={500}
      m="0 auto"
    >
      <Flex
        m="0 auto"
        w="100%"
        maxWidth={1160}
      >
        <Text
          fontSize="5xl"
          color="white"
          fontWeight={600}
          lineHeight="72px"
          mt="370"
        >
          Europa
        </Text>
      </Flex>
    </Box>
  )
}