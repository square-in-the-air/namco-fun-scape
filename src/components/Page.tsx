import { storyblokEditable, StoryblokServerComponent } from "@storyblok/react/rsc";

export interface StoryblokBlok {
  _uid: string;
  component: string;
  [key: string]: any;
}

interface PageProps {
  blok: {
    _uid: string;
    body?: StoryblokBlok[];
    [key: string]: any;
  };
}

export default function Page({ blok }: PageProps) {
  return (
    <main {...storyblokEditable(blok)}>
      {blok.body?.map((nestedBlok) => (
        <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </main>
  );
}
