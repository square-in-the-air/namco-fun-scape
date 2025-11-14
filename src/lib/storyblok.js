import { apiPlugin, storyblokInit } from '@storyblok/react/rsc';

import Page from "@/components/Page";
import Feature from "@/components/Feature";
import Grid from "@/components/Grid";
import Teaser from "@/components/Teaser";
import LocationList from '@/components/LocationList';

export const getStoryblokApi = storyblokInit({
    accessToken: process.env.NEXT_PUBLIC_STORYBLOK_CONTENT_API_ACCESS_TOKEN,
    use: [apiPlugin],
    components: {
        page: Page,
        feature: Feature,
        grid: Grid,
        teaser: Teaser,
        location_list: LocationList
    },
    apiOptions: {
        region: 'eu',
    },
});