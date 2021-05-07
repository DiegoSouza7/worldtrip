import { Box } from "@chakra-ui/react";

type BoxSelectedSlideProps = {
  index: number;
  position: number;
}

export function BoxSelectedSlide({index, position}: BoxSelectedSlideProps) {

  if(index === position) {
    return (
      <Box
        bg="#FFBA08"
        w={["8px", "10px", "12px", "14px", "16px"]}
        h={["8px", "10px", "12px", "14px", "16px"]}
        borderRadius="50%"
      />
    )
  }

  return (
    <Box
      bg="#999999"
      w={["8px", "10px", "12px", "14px", "16px"]}
      h={["8px", "10px", "12px", "14px", "16px"]}
      borderRadius="50%"
    />
  )
}