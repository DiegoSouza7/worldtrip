import { Box, Flex, Image, Text } from "@chakra-ui/react";

type CardProps = {
  src: string;
  text: string;
  alt: string;
  justifyItem: string;
}

export function Card({ src, text, alt, justifyItem }: CardProps) {
  
  return (
    <Flex
      flexDirection={{ sm: "row", lg: "column" }}
      alignItems="center"
      justifyContent={{sm: `${justifyItem}`,lg: "space-between"}}
      maxWidth={{sm: '170px', lg: 165}}
      h={{lg: 145}}
      w="100%"
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
        fontSize={{sm: "lg", md: "xl", lg: "2xl"}}
        textAlign="center"
        lineHeight={{sm: "27px", md: "30px", lg: "34px"}}
        color="gray.500"
      >
        {text}
    </Text>
    </Flex>
  )
}