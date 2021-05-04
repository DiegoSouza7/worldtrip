import { Box, Flex, Image, Text } from "@chakra-ui/react";

type CardProps = {
  src: string;
  text: string;
  alt: string;
}

export function Card({ src, text, alt }: CardProps) {
  return (
    <Flex
      flexDirection={{ sm: "row", lg: "column" }}
      alignItems="center"
      justifyContent={{lg: "space-between"}}
      w={{sm: '170px', lg: 165}}
      h={{lg: 145}}
    >
      <Image
        src={src}
        alt={alt}
        display={{ sm: "none", lg: "block" }}
      />
      <Box
        w="8px"
        h="8px"
        borderRadius="50%"
        bg="#FFBA08"
        display={{ sm: "block", lg: "none" }}
      />
      <Text
        ml={{sm: '10px', lg: '0'}}
        fontWeight={600}
        fontSize={[ "xl", "2xl"]}
        textAlign="center"
        lineHeight="34px"
        color="gray.500"
        weight={{ sm: "160px" }}
      >
        {text}
    </Text>
    </Flex>
  )
}