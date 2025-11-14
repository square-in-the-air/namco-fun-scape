import { StoryblokServerComponent, storyblokEditable } from "@storyblok/react/rsc";

interface StoryblokBlok {
  _uid: string;
  component: string;
  [key: string]: any;
}

interface GridProps {
  blok: {
    _uid: string;
    items?: StoryblokBlok[];
  };
}

export default function Grid({ blok }: GridProps) {
  return (
    <div className="grid" {...storyblokEditable(blok)}>
      {blok.items?.map((nestedBlok) => (
        <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  );
}
