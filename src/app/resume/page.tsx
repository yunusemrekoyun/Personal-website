import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { WorkHistory } from "@/components/WorkHistory";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">💼</span>
      <Heading className="font-black text-primary dark:text-white">
        Work History
      </Heading>
      <Paragraph className="max-w-xl mt-4 text-secondary dark:text-neutral-300">
        I’m a full-stack developer with a Computer Engineering degree from
        Amasya University. I enjoy{" "}
        <Highlight>building scalable applications</Highlight> and crafting
        intuitive digital experiences using modern technologies.
      </Paragraph>
      <WorkHistory />
    </Container>
  );
}
