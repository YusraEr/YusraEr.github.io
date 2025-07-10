import { Column, Heading, Meta, Schema, RevealFx, Text } from "@once-ui-system/core";
import { Mailchimp } from "@/components";
import { Posts } from "@/components/blog/Posts";
import { baseURL, blog, person, newsletter } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: blog.title,
    description: blog.description,
    baseURL: baseURL,
    image: `/images/og/home.jpg`,
    path: blog.path,
  });
}

export default function Blog() {
  return (
    <Column maxWidth="s">
      <Schema
        as="blogPosting"
        baseURL={baseURL}
        title={blog.title}
        description={blog.description}
        path={blog.path}
        image={`/images/og/home.jpg`}
        author={{
          name: person.name,
          url: `${baseURL}/blog`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <RevealFx translateY="4" fillWidth horizontal="start" paddingBottom="16">
        <Heading marginBottom="l" variant="display-strong-s">
          {blog.title}
        </Heading>
      </RevealFx>
      <RevealFx translateY="8" delay={0.2}>
        <Column
          fillWidth flex={1}>
          <Posts range={[1,1]} thumbnail direction="column"/>
          <Posts range={[2,3]} thumbnail/>
          <Posts range={[4]} columns="2"/>
        </Column>
      </RevealFx>
      {newsletter.display && (
        <RevealFx translateY="12" delay={0.4}>
          <Mailchimp newsletter={newsletter} />
        </RevealFx>
      )}
    </Column>
  );
}
