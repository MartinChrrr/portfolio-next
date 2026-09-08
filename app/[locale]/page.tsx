import { Contact } from "@/app/_components/Contact";
import GradientMesh from "@/app/_components/GradientMesh";
import { Header } from "@/app/_components/Header";
import { Presentation } from "@/app/_components/Presentation";
import { Skills } from "@/app/_components/Skills";
import { Spacing } from "@/app/_components/Spacing";
import { Status } from "@/app/_components/Status";

export default function Home() {
  return (
    <main>
      <GradientMesh />
      <Header />
      <Spacing size="sm" />
      <Presentation />
      <Spacing size="sm" />
      <Status />
      <Spacing size="sm" />
      <Skills />
      <Spacing size="sm" />
      <Contact />
      <Spacing size="sm" />
    </main>
  );
}
