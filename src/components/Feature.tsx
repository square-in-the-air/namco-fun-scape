import { storyblokEditable } from "@storyblok/react/rsc";

interface FeatureProps {
  blok: {
    _uid: string;
    name: string;
  };
}

export default function Feature({ blok }: FeatureProps) {
  return (
    <div className="feature" {...storyblokEditable(blok)}>
      <span>{blok.name}</span>
    </div>
  );
}
