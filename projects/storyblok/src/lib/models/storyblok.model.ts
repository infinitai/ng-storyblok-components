import { StoryblokPageModel } from './storyblok-layout.model';

export interface StoryblokGenericModel {
    _editable: any;
    component: string;
    style_classes: string;
    inline_styles: string;
}

export interface StoryblokStoryModel {
    content: StoryblokPageModel;
    name: string;
    slug: string;
}
