import { Flex, Grid, Image, Text } from "@chakra-ui/react";
import ReactCountryFlag from 'react-country-flag'

type CityCardProps = {
  name: string;
  country: string;
  flagImage: string;
  imageCity: string;
}

export function CityCard({ country, name, flagImage, imageCity }: CityCardProps) {
  return (
    <Grid
      w="256"
      h={280}
      textAlign="center"
      gridTemplateRows="173px 1fr"
      pl="10px"
      pr="10px"
      pb="10px"
    >
      <Image
        src={imageCity}
        alt={name}
        w="256px"
        h="173px"
        objectFit="cover"
        style={{ borderTopLeftRadius: '4px', borderTopRightRadius: '4px' }}
      />
      <Grid
        gridTemplateColumns="1fr 50px"
        border="1px solid rgba(255, 186, 8, 0.5)"
        borderBottomRadius="5px"
      >
        <Grid
          gridTemplateRows="1fr 1fr"
          height="100%"
          textAlign="left"
        >
          <Text
            color="gray.500"
            fontWeight={600}
            fontSize="xl"
            fontFamily="Barlow"
            lineHeight="25px"
            mt="18px"
            ml="24px"
          >
            {name}
          </Text>
          <Text
            fontWeight={500}
            fontSize={16}
            fontFamily="Barlow"
            lineHeight="26px"
            ml="24px"
            color="gray.400"
          >
            {country}
          </Text>
        </Grid>
        <Flex
          justifyContent="center"
          alignItems="center"
        >
          <ReactCountryFlag
            style={{
              fontSize: '2rem',
            }}
            aria-label={name}
            countryCode={flagImage}
            svg
          />
        </Flex>
      </Grid>
    </Grid>
  )
}