import { LayoutMain } from "components";
import {
  SectionHeader,
  SectionNFTList,
  SectionOwnedNFT,
  SectionProfile,
} from "components/home";
import { TableSystem } from "components/table";

export default function Home() {
  return (
    <LayoutMain>
      <SectionHeader />
      <SectionNFTList />
      <SectionProfile />
      <SectionOwnedNFT />
      <TableSystem />
    </LayoutMain>
  );
}
