import { apiPlugin, storyblokInit } from '@storyblok/react/rsc';

import Page from "@/components/layout/Page";

import Feature from "@/components/blocks/Feature";
import Grid from "@/components/blocks/Grid";
import Teaser from "@/components/blocks/Teaser";

export const getStoryblokApi = storyblokInit({
    accessToken: process.env.NEXT_PUBLIC_STORYBLOK_CONTENT_API_ACCESS_TOKEN,
    use: [apiPlugin],
    components: {
        page: Page,
        feature: Feature,
        grid: Grid,
        teaser: Teaser
    },
    apiOptions: {
        region: 'eu',
    },
});