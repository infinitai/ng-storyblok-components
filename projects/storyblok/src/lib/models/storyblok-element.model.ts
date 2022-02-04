import { StoryblokGenericModel } from './storyblok.model';

export interface StoryblokLinkModel extends StoryblokGenericModel {
    link: any;
    image: string;
    text: string;
    external: boolean;
    image_style_classes: string;
    image_inline_styles: string;
}

export interface StoryblokHeadlineModel extends StoryblokGenericModel {
    text: string;
    type: string;
    strong: boolean;
}

export interface StoryblokHtmlModel extends StoryblokGenericModel {
    body: any;
}

export interface StoryblokIconModel extends StoryblokGenericModel {
    icon: any;
    link: any;
    alt_text: string;
    strong: boolean;
}

export interface StoryblokImageModel extends StoryblokGenericModel {
    image: string;
    alt_text: string;
}

export interface StoryblokParagraphModel extends StoryblokGenericModel {
    text: any;
}

export interface StoryblokSpanModel extends StoryblokGenericModel {
    text: any;
}
