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
        w={{ sm: 324, xl: "100%" }}
        h="100%"
        flexDirection="column"
        justifyContent="space-between"
        alignItems="center"
        onClick={handleToPageContinent}
        cursor="pointer"
        position="relative"
      >
        <Text
          fontWeight={700}
          fontSize={{ sm: "3xl", md: "4xl", xl: "5xl" }}
          lineHeight={{sm: "54px", xl: "72px"}}
          color="#F5F8FA"
        >
          {continent.name}
        </Text>
        <Text
          fontWeight={700}
          fontSize={{ sm: "xl", xl: "2xl" }}
          lineHeight={{sm: 5, xl: "72px"}}
          color="#DADADA"
          textAlign="center"
        >
          {continent.shortDescription}
        </Text>
        <Flex
          w={{ sm: "80px", md: "90px", lg: "100px", xl: "128px"}}
          h="16px"
          position="absolute"
          mt={{ sm: "140px", md: '160px', lg: '190px', xl: '250px', "2xl": "250px" }}
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