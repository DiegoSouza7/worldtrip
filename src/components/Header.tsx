import { Image } from "@chakra-ui/image";
import { Flex } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      w="100%"
      maxWidth={1440}
      h={100}
      m="0 auto"
    >
      <Image
        src="/Logo.png"
        alt="Logo"
        w={185}
      />
    </Flex>
  )
}