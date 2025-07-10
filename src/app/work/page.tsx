import { Column, Meta, Schema, RevealFx, Heading } from "@once-ui-system/core";
import { baseURL, about, person, work } from "@/resources";
import { Projects } from "@/components/work/Projects";

export async function generateMetadata() {
  return Meta.generate({
    title: work.title,
    description: work.description,
    baseURL: baseURL,
    image: `/images/og/home.jpg`,
    path: work.path,
  });
}

export default function Work() {
  return (
    <Column maxWidth="s">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={work.path}
        title={work.title}
        description={work.description}
        image={`/images/og/home.jpg`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <RevealFx translateY="4" fillWidth horizontal="center">
        <Heading marginBottom="l" variant="display-strong-s">
          {work.title}
        </Heading>
      </RevealFx>
      <Projects />
    </Column>
  );
}
