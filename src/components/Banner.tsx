import { Image } from "@chakra-ui/image";
import { Box, Flex, Text } from "@chakra-ui/layout";


export function Banner() {
  return (
    <Box
      backgroundImage="url('/Background.png')"
      bgPosition="center"
      bgRepeat="no-repeat"
      w="100%"
      h={335}
      m="0 auto"
    >
      <Flex
        position="relative"
        w="100%"
        maxWidth={1300}
        h={335}
        justifyContent="space-between"
        alignItems="center"
        m="0 auto"
      >
        <Flex
          flexDirection="column"
          justifyContent="space-evenly"
          h={335}
          w="100%"
        >
          <Text
            color="gray.50"
            fontSize="4xl"
            lineHeight="54px"
            fontWeight="500"
          >
            5 Continentes,<br/> infinitas possibilidades.
          </Text>
          <Text
            color="gray.200"
            fontSize="xl"
            lineHeight="30px"
            fontWeight="400"
          >
            Chegou a hora de tirar do papel a viagem que você <br/> sempre sonhou.
        </Text>
        </Flex>
        <Flex
          h={335}
          justifyContent="center"
          w="100%"
        >
          <Image
            position="absolute"
            src="/Airplane.png"
            w={420}
            transform="rotate(-3ºdeg)"
            marginTop={76}
          />
        </Flex>
      </Flex>
    </Box>
  )
}