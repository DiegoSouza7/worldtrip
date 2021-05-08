import { Flex, Text, Box, Tooltip } from '@chakra-ui/react'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import { BannerContinent } from '../components/BannerContinent'
import { CityCard } from '../components/CityCard'
import { Header } from '../components/Header'
import { api } from '../services/api'

interface ContinentProps {
  continent: {
    id: number;
    name: string;
    shortDescription: string;
    imageBanner: string;
    description: string;
    citiesPlus: string;
    numberCountry: number;
    numberLanguages: number;
    numberCities: number;
    cities: {
      name: string;
      country: string;
      flagImage: string;
      imageCity: string
    }[]
  }
}

export default function Continent({continent}: ContinentProps) {


  return (
    <>
      <Head>
        <title>
          Worldtrip
        </title>
      </Head>
      <Header />
      <BannerContinent image={continent.imageBanner} title={continent.name} />
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
          maxWidth={{md: 500, xl: 600}}
          color="gray.500"
          textAlign="justify"
          mr="10px"
        >
          {continent.description}
        </Text>
        <Flex
          w="100%"
          h={100}
          minWidth="350px"
          maxWidth="380px"
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
              {continent.numberCountry}
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
              {continent.numberLanguages}
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
              {continent.numberCities}
            </Text>
            <Flex>
              <Text
                fontWeight={600}
                fontSize={{sm: "lg",  md: "xl", lg: "2xl"}}
                color="gray.500"
                lineHeight="36px"
                whiteSpace="nowrap"
              >
                cidades +{continent.citiesPlus}
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
        m="0 auto"
        mt={{sm: "24px", md: 20}}
        pl={{sm: "16px", "2xl": 0}}
        pr={{sm: "16px", "2xl": 0}}
      >
        <Text
          fontWeight={500}
          fontSize={{sm: "2xl", xl: "4xl"}}
          lineHeight={{sm: 6, xl: "54px"}}
        >
          cidades +{continent.citiesPlus}
        </Text>
        <Flex
          justifyContent={{sm: "Center", md: "space-evenly"}}
          alignItems="center"
          flexWrap="wrap"
          w="100%"
          mt={10}
          mb="30px"
        >
          {continent.cities.map(city => (
            <CityCard
              key={city.name}
              country={city.country}
              name={city.name}
              flagImage={city.flagImage}
              imageCity={city.imageCity}
            />
          ))}
        </Flex>
      </Box>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const {id} = ctx.params

  const { data } = await api.get(`continents/${id}`)

  const continent = data

  return {
    props: {
      continent
    },
    revalidate: 60 * 60 * 24
  }
}