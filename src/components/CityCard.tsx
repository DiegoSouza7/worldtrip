import { Flex, Grid, Text } from "@chakra-ui/react";


export function CityCard() {
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
      <img
        src="/Londres.png"
        alt="Londres"
        style={{borderTopLeftRadius: '4px', borderTopRightRadius: '4px'}}
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
            Londres
          </Text>
          <Text
            fontWeight={500}
            fontSize={16}
            fontFamily="Barlow"
            lineHeight="26px"
            ml="24px"
            color="gray.400"
          >
            Reino Unido
          </Text>
        </Grid>
        <Flex
          justifyContent="center"
          alignItems="center"
        >
          <img width="30px" height="30px" src="/Bandeira.svg" alt="" />
        </Flex>
      </Grid>
    </Grid>
  )
}