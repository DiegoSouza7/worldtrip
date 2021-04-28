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
        h={220}
        m="0 auto"
        mt={20}
        justifyContent="space-between"
        alignItems="center"
      >
        <Text
          fontWeight={400}
          fontSize="2xl"
          lineHeight="36px"
          maxWidth={600}
          color="gray.500"
        >
          A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
        </Text>
        <Flex
          w={490}
          h={100}
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
              fontSize="5xl"
              lineHeight="72px"
            >
              50
            </Text>
            <Text
              fontWeight={600}
              fontSize="2xl"
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
              fontSize="5xl"
              lineHeight="72px"
            >
              60
            </Text>
            <Text
              fontWeight={600}
              fontSize="2xl"
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
              fontSize="5xl"
              lineHeight="72px"
            >
              27
            </Text>
            <Flex>
              <Text
                fontWeight={600}
                fontSize="2xl"
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
      >
        <Text
          fontWeight={500}
          fontSize="4xl"
          lineHeight="54px"
        >
          cidades +100
        </Text>
        <Flex
          justifyContent="space-between"
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