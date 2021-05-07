import { Box, Flex, Heading, Image, Link, Text } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";
import { BoxSelectedSlide } from "./BoxSelectedSlide";

type Continent = {
  id: number;
  name: string;
  shortDescription: string;
  imageSlide: string;
}

interface ContinentSlideProps {
  continents: Continent[]
}
export function ContinentSlide({ continents }: ContinentSlideProps) {
  const [indexContinent, setIndexContinent] = useState(0)
  const [continent, setContinent] = useState<Continent>(continents[0])
  const history = useRouter()

  useEffect(() => {
    setIndexContinent(continents.findIndex(continents => continents.id === continent.id))
  }, [continent])

  function handleNextContinent() {
    if (indexContinent < continents.length) {
      setContinent(continents[indexContinent + 1])
    }
  }

  function handlePreviusContinent() {
    if (indexContinent > 0) {
      setContinent(continents[indexContinent - 1])
    }
  }

  function handleToPageContinent() {
    history.push(`/${continent.name}`)
  }

  return (
    <Flex
      w="100%"
      maxWidth={1240}
      minHeight={{ sm: "250px", md: '300px', lg: '375px', xl: '450px' }}
      m="0 auto"
      position="relative"
      justifyContent="space-between"
      alignItems="center"
      mt={20}
      mb={10}
      backgroundImage={`url('${continent.imageSlide}')`}
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
    >
      <Image
        src="/Previous.svg"
        alt="Anterior"
        w={{ sm: "30px", md: '40px', lg: '50px', xl: '60px' }}
        h={{ sm: "30px", md: '40px', lg: '50px', xl: '60px' }}
        cursor="pointer"
        onClick={handlePreviusContinent}
      />
      <Flex
        w={324}
        h={116}
        flexDirection="column"
        justifyContent="space-between"
        alignItems="center"
        onClick={handleToPageContinent}
        cursor="pointer"
      >
        <Text
          fontWeight={700}
          fontSize={{ sm: "3xl", md: "4xl", xl: "5xl" }}
          lineHeight="72px"
          color="#F5F8FA"
        >
          {continent.name}
        </Text>
        <Text
          fontWeight={700}
          fontSize={{ sm: "xl", xl: "2xl" }}
          lineHeight="72px"
          color="#DADADA"
        >
          {continent.shortDescription}
        </Text>
        <Flex
          w={["60px", "80px", "100px", "128px"]}
          h="16px"
          mt={{ sm: "10px", md: '30px', lg: '50px', xl: '90px', "2xl": "30px" }}
          justifyContent="space-between"
          alignItems="center"
        >
          <BoxSelectedSlide index={indexContinent} position={0} />
          <BoxSelectedSlide index={indexContinent} position={1} />
          <BoxSelectedSlide index={indexContinent} position={2} />
          <BoxSelectedSlide index={indexContinent} position={3} />
          <BoxSelectedSlide index={indexContinent} position={4} />
          <BoxSelectedSlide index={indexContinent} position={5} />
        </Flex>
      </Flex>
      <Image
        src="/Next.svg"
        alt="Próximo"
        w={{ sm: "30px", md: '40px', lg: '50px', xl: '60px' }}
        h={{ sm: "30px", md: '40px', lg: '50px', xl: '60px' }}
        cursor="pointer"
        onClick={handleNextContinent}
      />
    </Flex>
  )
}