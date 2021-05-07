import { Flex, Text } from '@chakra-ui/react'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import { Banner } from '../components/Banner'
import { ContinentsSlides } from '../components/ContinentsSlides'
import { Header } from '../components/Header'
import { TravelTypes } from '../components/TravelTypes'
import { api } from '../services/api'

interface HomeProps {
  continents: {
    id: number;
    name: string;
    shortDescription: string;
    imageSlide: string;
  }[]
}

export default function Home({ continents }: HomeProps) {
  return (
    <>
      <Head>
        <title>
          Worldtrip
        </title>
      </Head>
      <Header />
      <Banner />
      <TravelTypes />
      <Flex
        maxWidth={90}
        w="100%"
        m="0 auto"
        marginTop={20}
        borderTop="2px solid #47585B"
      />
      <Flex
        flexDirection="column"
        justifyContent="space-between"
        alignItems="center"
        w={{ sm: "100%", lg: 840 }}
        h={101}
        m="0 auto"
        mt={20}
      >
        <Text
          fontWeight={500}
          fontSize={{ sm: "2xl", xl: "4xl" }}
          lineHeight="54px"
        >
          Vamos nessa?
        </Text>
        <Text
          fontWeight={500}
          fontSize={{ sm: "2xl", xl: "4xl" }}
          lineHeight="54px"
          textAlign="center"
        >
          Então escolha seu continente
        </Text>
      </Flex>
      <ContinentsSlides continents={continents} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get('continents')

  const continents = data.map(continent => {
    return {
      id: continent.id,
      name: continent.name,
      shortDescription: continent.shortDescription,
      imageSlide: continent.imageSlide
    }
  })

  return {
    props: {
      continents
    },
    revalidate: 60 * 60 * 8
  }
}