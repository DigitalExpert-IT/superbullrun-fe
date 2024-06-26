import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ICONS_FOOTER } from "constant/icon";
import { useTranslation } from "react-i18next";
import {
  Container,
  Box,
  Text,
  Flex,
  HStack,
  Icon,
  AspectRatio,
  Heading,
} from "@chakra-ui/react";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <Box as="footer" w="full" position={"relative"} bg="black">
      <Box bg="#F16623" w="full" h="full" position="static" overflow={"hidden"}>
        <Image
          src="/assets/dashboard/bg-billboard.png"
          alt="background-footer"
          loading="lazy"
          style={{ objectFit: "cover" }}
          priority={false}
          fill
        />
        <Container maxW="container.lg" py={"2rem"} px={30}>
          <Flex
            justify={"center"}
            gap={{ base: 6, md: 20 }}
            flexDirection={{ base: "column-reverse", md: "row" }}
            w={"full"}
            h={{ base: "unset", md: 100 }}
          >
            <Flex
              alignItems={"center"}
              flex={"1 1 0 "}
              w={{ base: "full", md: 0 }}
            >
              <Text textAlign={{ base: "center", md: "right" }}>
                {t("common.footer.description")}
              </Text>
            </Flex>
            <Box
              w={"1px"}
              opacity={0.7}
              bg={"white"}
              display={{ base: "none", md: "block" }}
            />
            <Box
              display={"flex"}
              flex={"1 1 0"}
              alignItems={"center"}
              justifyContent={{ base: "center", md: "start" }}
              w={{ base: "full", md: 0 }}
            >
              <AspectRatio ratio={{ base: 2 / 0.5, md: 1 }} minWidth="250">
                <Image
                  style={{
                    objectFit: "contain",
                  }}
                  sizes="(max-width: 768px) 100vw,"
                  fill
                  loading="lazy"
                  src={"/assets/logo/footer-logo.png"}
                  alt="logo-image"
                  priority={false}
                />
              </AspectRatio>
            </Box>
          </Flex>
        </Container>
        <HStack justify={"center"} pb={"2rem"}>
          {ICONS_FOOTER.map((row, i) => (
            <Box key={i} alignItems="center" justifyContent="center">
              <Link href={row.href} target="_blank">
                <Icon as={row.icons} w={5} h={5} color="white" />
              </Link>
            </Box>
          ))}
        </HStack>
      </Box>
      <Flex justify={"center"} py={2}>
        <Text fontSize={{ base: "sm", sm: "md" }}>
          &#169; {new Date().getFullYear()} SUPER BULLRUN, All right reserved
        </Text>
      </Flex>
    </Box>
  );
};
