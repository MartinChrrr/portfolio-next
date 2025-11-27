import Image from "next/image";
import { Header } from "./_components/Header";
import { Presentation } from "./_components/Presentation";
import { Spacing } from "./_components/Spacing";
import { Status } from "./_components/Status";
import { Skills } from "./_components/Skills";
import { Contact } from "./_components/Contact";

export default function Home() {
  return (
<main>
  <Header />
  <Spacing size="sm" />
  <Presentation/>
  <Spacing size="sm"/>
  <Status/>
  <Spacing size="sm"/>
  <Skills />
  <Spacing size="sm"/>
  <Contact />
  <Spacing size="sm"/>

</main>
  );
}
