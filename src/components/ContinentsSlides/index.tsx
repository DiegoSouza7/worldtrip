import { ContinentSlide } from "./ContinentSlide";

interface ContinentsSlidesProps {
  continents: {
    id: number;
    name: string;
    shortDescription: string;
    imageSlide: string;
  }[]
}

export function ContinentsSlides({ continents }: ContinentsSlidesProps) {

  return (
    <ContinentSlide continents={continents} />
  )
}