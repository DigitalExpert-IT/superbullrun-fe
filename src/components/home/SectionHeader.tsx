import Link from "next/link";
import Image from "next/image";
import {
  Heading,
  Text,
  Box,
  HStack,
  Button,
  Flex,
  Stack,
  Icon,
  VStack,
  AspectRatio,
} from "@chakra-ui/react";
import { Trans, useTranslation } from "react-i18next";
import { AiOutlineArrowDown } from "react-icons/ai";
import { LazyVideo } from "components/LazyVideo";
import { ButtonConnectWallet, ButtonConnectWrapper } from "components/button";
import { useAccountMap } from "hooks";

export const SectionHeader = () => {
  const { t } = useTranslation();
  const accountMap = useAccountMap();

  return (
    <Flex
      h="100vh"
      pos="relative"
      align="center"
      justify="center"
      gap="10"
      // bgColor="black"
      // bgGradient="linear( to-t, #0A1424 9.97%, #0A1022 12.48%, #092930 124.52%)"
    >
      <Image
        src="https://ik.imagekit.io/msxxxaegj/BullrunPass/head-pattern.png?updatedAt=1715787786437"
        alt="img-header"
        loading="lazy"
        sizes="100vw"
        style={{ objectFit: "cover" }}
        z-index="0"
        fill
      />
      <Box
        display={{
          base: "none",
          lg: "block",
        }}
        minW="30%"
        rounded="xl"
        overflow="hidden"
      >
        <AspectRatio w={{ base: "none", md: "md", xl: " xl" }} ratio={1}>
          <Image
            src="https://ik.imagekit.io/msxxxaegj/BullrunPass/head-image.png?updatedAt=1715787898790"
            alt="head-image"
            style={{ objectFit: "contain" }}
            fill
          />
        </AspectRatio>
      </Box>
      <Stack
        maxW={"xl"}
        textAlign={{ base: "center", lg: "left" }}
        fontWeight="black"
        zIndex={1}
      >
        <Heading
          fontWeight="black"
          textShadow={{ base: "0px 4px 4px rgba(0, 0, 0, 0.25)", md: "none" }}
          fontSize={{ base: "4xl", xs: "5xl", md: "5xl", lg: "7xl" }}
          lineHeight="150%"
          bgGradient="linear-gradient(to-r, #F16623 2.72%, #FBA77E 98.31%)"
          bgClip="text"
        >
          <Trans i18nKey="pages.home.header.title" />
        </Heading>
        <Text
          fontSize={{ base: "2xl", md: "3xl", lg: "5xl" }}
          fontWeight={"normal"}
          lineHeight="130%"
        >
          <Trans
            i18nKey="pages.home.header.subtitle"
            components={{
              strong: (
                <Text
                  as="strong"
                  fontSize={{ base: "4xl", md: "5xl", lg: "7xl" }}
                />
              ),
            }}
          />
        </Text>
        <HStack
          justify={{ base: "center", lg: "start" }}
          mt="6"
          spacing={{ base: "2", sm: "4" }}
        >
          {accountMap?.data?.status === false ? (
            <ButtonConnectWrapper>
              <Link href="/register">
                <Button
                  variant={"outline"}
                  fontWeight={"thin"}
                  border={"2px"}
                  borderColor={"white"}
                >
                  {t("common.register").toUpperCase()}
                </Button>
              </Link>
            </ButtonConnectWrapper>
          ) : null}
        </HStack>
      </Stack>
      <VStack
        pb={"4"}
        textAlign={"center"}
        display={{ lg: "none" }}
        position={"absolute"}
        bottom={"0"}
        right={"0"}
        left={"0"}
      >
        <Text>{t("common.discover")}</Text>
        <Icon textColor={"white"} fontSize={"2xl"}>
          <AiOutlineArrowDown />
        </Icon>
      </VStack>
    </Flex>
  );
};
