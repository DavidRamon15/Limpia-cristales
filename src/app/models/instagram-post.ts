export interface InstagramPost {
    id: string;
    media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
    media_url: string;
    caption?: string;
    permalink: string;
    children?: {
        data: { media_url: string }[];
    };
}