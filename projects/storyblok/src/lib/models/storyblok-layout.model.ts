import { StoryblokGenericModel } from './storyblok.model';

export interface StoryblokPageModel extends StoryblokGenericModel {
    heading: string;
    body: [StoryblokSectionModel];
}

export interface StoryblokSectionModel extends StoryblokGenericModel {
    key: string;
    body: [StoryblokContainerModel | StoryblokRowModel];
    layout: string;
}

export interface StoryblokContainerModel extends StoryblokGenericModel {
    key: string;
    body: [StoryblokGenericModel];
    layout: string;
}

export interface StoryblokRowModel extends StoryblokGenericModel {
    body: [StoryblokColumnModel];
}

export interface StoryblokColumnModel extends StoryblokGenericModel {
    body: [any];
    width: {
        xsmall: string;
        small: string;
        medium: string;
        large: string;
        xlarge: string;
    };
}
