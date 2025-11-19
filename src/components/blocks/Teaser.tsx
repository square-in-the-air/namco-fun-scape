import { storyblokEditable } from "@storyblok/react/rsc";

interface TeaserProps {
  blok: {
    _uid: string;
    title: string;
  };
}

export default function Teaser({ blok }: TeaserProps) {
  return (
    <div className="teaser" {...storyblokEditable(blok)}>
      <h2>{blok.title}</h2>
    </div>
  );
}
