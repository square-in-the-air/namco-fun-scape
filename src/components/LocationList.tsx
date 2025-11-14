import Link from "next/link";
import { getStoryblokApi } from "@/lib/storyblok";

interface StoryblokLocation {
  uuid: string;
  name: string;
  full_slug: string;
}

export default async function LocationsList() {
  const storyblokApi = getStoryblokApi();

  const { data } = await storyblokApi.get("cdn/stories", {
    version: "draft",
    starts_with: "location/",
  });

  const location: StoryblokLocation[] = data.stories || [];

  return (
    <ul>
      {location
        .sort((a, z) => a.name.localeCompare(z.name))
        .map((loc) => {
          const path = loc.full_slug.replace(/^location\//, "");
          return (
            <li key={loc.uuid}>
              <Link href={`/${path}`}>{loc.name}</Link>
            </li>
          );
        })}
    </ul>
  );
}
