import { Box, Heading, Stack, Text, Button, Image } from "@chakra-ui/react";
import { CARD_IMAGE_MAP } from "constant/image";
import { useNftList, useAsyncCall } from "hooks";
import { useTranslation } from "react-i18next";

interface CardListNFTProps {
  title: string;
  price: string;
  id: number;
}

export const CardListNFT: React.FC<CardListNFTProps> = props => {
  const { t } = useTranslation();
  const { buy } = useNftList();

  const { exec, isLoading } = useAsyncCall(buy, t("common.succesBuyNft"));

  const handleBuy = () => {
    exec(props.id);
  };

  return (
    <Box textAlign="center" rounded="xl" overflow="hidden">
      <Heading textTransform="uppercase" py="1">
        {props.title}
      </Heading>
      <Stack
        rounded="xl"
        color="white"
        bgGradient="linear(130deg, #F96C6C, #F3B79B)"
        p="3px"
      >
        <Stack bgColor="#0A1022" p="1.4rem" rounded="xl">
          <Stack>
            <Box rounded="xl" overflow="hidden">
              <Image
                src={CARD_IMAGE_MAP[props.id as 0]}
                alt={`NFT-${props.id}`}
                objectFit="cover"
              />
            </Box>
            <Box py="1rem">
              <Text fontWeight="600">Mint Price {props.price} USDT</Text>
              <Stack alignItems="center" py="1rem">
                <Box
                  bgGradient="linear(130deg, #F96C6C, #F3B79B)"
                  w="100%"
                  rounded="lg"
                  p="1px"
                >
                  <Box w="100%" bg="black" rounded="lg" p="2">
                    <Text>{props.price} USDT</Text>
                  </Box>
                </Box>
                <Button
                  w="100%"
                  rounded="lg"
                  background="#F16623"
                  _hover={{ background: "#85350e" }}
                  onClick={() => handleBuy()}
                  isLoading={isLoading}
                >
                  Buy NFT
                </Button>
              </Stack>
            </Box>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};
