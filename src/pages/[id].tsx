import { Flex, Text, Box, Tooltip } from '@chakra-ui/react'
import Head from 'next/head'
import { BannerContinent } from '../components/BannerContinent'
import { CityCard } from '../components/CityCard'
import { Header } from '../components/Header'


export default function Continents() {


  return (
    <>
      <Head>
        <title>
          Worldtrip
        </title>
      </Head>
      <Header />
      <BannerContinent />
      <Flex
        w="100%"
        maxWidth={1160}
        pl={{sm: "16px", "2xl": 0}}
        pr={{sm: "16px", "2xl": 0}}
        m="0 auto"
        mt={{sm: "24px", md: 20}}
        flexDirection={{sm: "column", md: "row"}}
        justifyContent="space-between"
        alignItems="center"
      >
        <Text
          fontWeight={400}
          fontSize={{ sm: "sm", md: "lg", lg: "2xl"}}
          lineHeight={{sm: 5, md: 7, lg: 9}}
          maxWidth={{md: 500,lg: 600}}
          color="gray.500"
          textAlign="justify"
          mr="10px"
        >
          A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
        </Text>
        <Flex
          w="100%"
          h={100}
          minWidth="350px"
          maxWidth="360"
          justifyContent="space-between"
          alignItems="center"
        >
          <Flex
            justifyContent="space-between"
            alignItems="center"
            flexDirection="column"
          >
            <Text
              color="#FFBA08"
              fontWeight={600}
              fontSize={{ sm: "2xl", md: "3xl", lg: "5xl"}}
              lineHeight={{ sm: 9, md: "48px", lg: "72px"}}
            >
              50
            </Text>
            <Text
              fontWeight={600}
              fontSize={{sm: "lg",  md: "xl", lg: "2xl"}}
              color="gray.500"
              lineHeight="36px"
            >
              países
            </Text>
          </Flex>
          <Flex
            justifyContent="space-between"
            alignItems="center"
            flexDirection="column"
          >
            <Text
              color="#FFBA08"
              fontWeight={600}
              fontSize={{ sm: "2xl", md: "3xl", lg: "5xl"}}
              lineHeight={{ sm: 9, md: "48px", lg: "72px"}}
            >
              60
            </Text>
            <Text
              fontWeight={600}
              fontSize={{sm: "lg",  md: "xl", lg: "2xl"}}
              color="gray.500"
              lineHeight="36px"
            >
              línguas
            </Text>
          </Flex>
          <Flex
            justifyContent="space-between"
            alignItems="center"
            flexDirection="column"
          >
            <Text
              color="#FFBA08"
              fontWeight={600}
              fontSize={{ sm: "2xl", md: "3xl", lg: "5xl"}}
              lineHeight={{ sm: 9, md: "48px", lg: "72px"}}
            >
              27
            </Text>
            <Flex>
              <Text
                fontWeight={600}
                fontSize={{sm: "lg",  md: "xl", lg: "2xl"}}
                color="gray.500"
                lineHeight="36px"
                whiteSpace="nowrap"
              >
                cidades +100
              </Text>
              <Tooltip
                hasArrow label="Procurar cidades"
                bg="gray.300"
                color="black"
              >
                <img src="/Info.svg" alt="Info" style={{marginLeft: "5px"}} />
              </Tooltip>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Box
        w="100%"
        maxWidth={1160}
        h={220}
        m="0 auto"
        mt={20}
        pl={{sm: "16px", "2xl": 0}}
        pr={{sm: "16px", "2xl": 0}}
      >
        <Text
          fontWeight={500}
          fontSize={{sm: "2xl", xl: "4xl"}}
          lineHeight={{sm: 6, xl: "54px"}}
        >
          cidades +100
        </Text>
        <Flex
          justifyContent={{sm: "Center", md: "space-evenly"}}
          alignItems="center"
          flexWrap="wrap"
          w="100%"
          mt={10}
        >
          <CityCard />
          <CityCard />
          <CityCard />
          <CityCard />
          <CityCard />
        </Flex>
      </Box>
    </>
  )
}