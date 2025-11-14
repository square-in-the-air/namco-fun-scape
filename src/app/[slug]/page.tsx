import { getStoryblokApi } from "@/lib/storyblok";
import { StoryblokStory } from "@storyblok/react/rsc";

export default async function LocationDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const fullSlug = `location/${slug}`;
  const storyblokApi = getStoryblokApi();
  const { data } = await storyblokApi.get(`cdn/stories/${fullSlug}`, { version: "draft" });

  return <StoryblokStory story={data.story} />;
}
