import { Box, Flex, Heading, Image, Link, Text } from "@chakra-ui/react";
import { ContinentSlide } from "./ContinentSlide";


interface SlidesProps {
  continents: {
    slug: string;
    title: string;
    summary: string;
    image: string;
  }[]
}
export function ContinentsSlides({ continents }: SlidesProps) {
  const continent = {
    id: 123156,
    title: 'Europa',
    description: 'O continente mais antigo',
    image: '/ContinentImage.png'
  }

  return (
    <ContinentSlide continent={continent} />
  )
}