import Head from 'next/head'
import { BannerContinent } from '../components/BannerContinent'
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
    </>
  )
}