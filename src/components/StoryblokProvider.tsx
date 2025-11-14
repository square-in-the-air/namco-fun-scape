"use client";

import { ReactNode, PropsWithChildren, useEffect } from "react";
import { getStoryblokApi } from "@/lib/storyblok";

interface StoryblokProviderProps {
  children: ReactNode;
}

export default function StoryblokProvider({ children }: PropsWithChildren<StoryblokProviderProps>) {
  useEffect(() => {
    getStoryblokApi();
  }, []);

  return <>{children}</>;
}
