import { Flex, Text } from '@chakra-ui/react'
import Head from 'next/head'
import { Banner } from '../components/Banner'
import { ContinentsSlides } from '../components/ContinentsSlides'
import { Header } from '../components/Header'
import { TravelTypes } from '../components/TravelTypes'

export default function Home() {
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
        w={840}
        h={101}
        m="0 auto"
        mt={20}
      >
        <Text
          fontWeight={500}
          fontSize="4xl"
          lineHeight="54px"
        >
          Vamos nessa?
        </Text>
        <Text
          fontWeight={500}
          fontSize="4xl"
          lineHeight="54px"
        >
          Então escolha seu continente
        </Text>
      </Flex>
      <ContinentsSlides />
    </>
  )
}
