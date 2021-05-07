import { Box, Flex, Heading, Image, Link, Text } from "@chakra-ui/react";

interface ContinentSlideProps {
  continent: {
    id: number;
    title: string;
    description: string;
    image: string;
  }
}
export function ContinentSlide({ continent }: ContinentSlideProps) {

  return (
    <Flex
      w="100%"
      maxWidth={1240}
      h={{sm: "250px", md: '300px', lg: '375px', xl: '450px'}}
      m="0 auto"
      position="relative"
      justifyContent="space-between"
      alignItems="center"
      mt={20}
      mb={10}
      backgroundImage={`url('${continent.image}')`}
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
    >
      <Image
        src="/Previous.svg"
        alt="Anterior"
        w="60px"
        h="60px"
        cursor="pointer"
      />
      <Flex
        w={324}
        h={116}
        flexDirection="column"
        justifyContent="space-between"
        alignItems="center"
      >
        <Text
          fontWeight={700}
          fontSize={["3xl", "4xl", "5xl"]}
          lineHeight="72px"
          color="#F5F8FA"
        >
          {continent.title}
        </Text>
        <Text
          fontWeight={700}
          fontSize={["xl", "2xl"]}
          lineHeight="72px"
          color="#DADADA"
        >
          {continent.description}
        </Text>
        <Flex
        w={128}
        h="16px"
        mt={{sm: "10px", md: '30px', lg: '50px', xl: '100px'}}
        justifyContent="space-between"
        alignItems="center"
      >
        <Box
          bg="#FFBA08"
          w="16px"
          h="16px"
          borderRadius="50%"
        />
        <Box
          bg="#999999"
          w="16px"
          h="16px"
          borderRadius="50%"
        />
        <Box
          bg="#999999"
          w="16px"
          h="16px"
          borderRadius="50%"
        />
        <Box
          bg="#999999"
          w="16px"
          h="16px"
          borderRadius="50%"
        />
        <Box
          bg="#999999"
          w="16px"
          h="16px"
          borderRadius="50%"
        />
      </Flex>
      </Flex>
      <Image
        src="/Next.svg"
        alt="Próximo"
        w="60px"
        h="60px"
        cursor="pointer"
      />
    </Flex>
  )
}