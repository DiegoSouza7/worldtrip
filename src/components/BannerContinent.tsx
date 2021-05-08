import { Box, Flex, Text } from "@chakra-ui/react";

type BannerContinentProps = {
  image: string;
  title: string;
}

export function BannerContinent({ image, title }: BannerContinentProps) {
  return (
    <Flex
      backgroundImage={`url('${image}')`}
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      bgPosition="center"
      bgRepeat="no-repeat"
      w="100%"
      h={{ sm: "150px", md: '300px', lg: '400px', xl: '500px' }}
      m="0 auto"
      maxWidth={1440}
      justifyContent="center"
      alignItems="center"
    >
      <Flex
        w="100%"
        h="100%"
        maxWidth={1160}
        justifyContent={{ sm: "center", md: "start" }}
        alignItems={{ sm: "center", md: "flex-end" }}
        pl={{ sm: "16px", "2xl": 0 }}
        pr={{ sm: "16px", "2xl": 0 }}
      >
        <Text
          fontSize={{ sm: "2xl", md: "3xl", lg: "4xl", xl: "5xl" }}
          color="white"
          fontWeight={600}
          lineHeight={{ sm: "42px", md: "52px", lg: "68px", xl: "72px" }}
          mb={{ sm: 0, md: "20px" }}
        >
          {title}
        </Text>
      </Flex>
    </Flex>
  )
}