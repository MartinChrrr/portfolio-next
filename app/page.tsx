import Image from "next/image";
import { Header } from "./_components/Header";
import { Presentation } from "./_components/Presentation";
import { Spacing } from "./_components/Spacing";
import { Status } from "./_components/Status";

export default function Home() {
  return (
<main>
  <Header />
  <Spacing size="sm" />
  <Presentation/>
  <Spacing size="sm"/>
  <Status/>
</main>
  );
}
