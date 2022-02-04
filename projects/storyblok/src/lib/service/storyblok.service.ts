import { Inject, Injectable, Optional } from '@angular/core';
import Client, { Richtext } from 'storyblok-js-client';

@Injectable({
    providedIn: 'root',
})
export class StoryblokService {
    private sbClient: Client;
    private version: string;

    constructor(
        @Inject('storyblokAccessToken') accessToken: string,
        @Inject('storyblokVersion') version: string,
        @Inject('storyblokCacheSettings')
        @Optional()
        cacheSettings: { clear: 'auto'; type: 'memory' }
    ) {
        this.sbClient = new Client({
            accessToken: accessToken,
            cache: cacheSettings,
        });

        this.version = version;
    }

    getStory(slug: string, params?: object): Promise<any> {
        params = {
            ...{ version: this.version },
            ...params,
        };
        return this.sbClient.getStory(slug, params).then((res) => res.data);
    }

    getStories(params?: object): Promise<any> {
        params = {
            ...{ version: this.version },
            ...params,
        };
        return this.sbClient.getStories(params).then((res) => res.data);
    }

    getContent(text: Richtext): string {
        return text ? this.sbClient.richTextResolver.render(text) : '';
    }

    getData(slug: string, params?: object): Promise<any> {
        params = {
            ...{ version: this.version },
            ...params,
        };
        return this.sbClient
            .get('cdn/datasource_entries', params)
            .then((response) => {
                console.log(response);
                return response.data; // eslint-disable-line @typescript-eslint/no-unsafe-return
            })
            .catch((error) => {
                console.log(error);
                return error; // eslint-disable-line @typescript-eslint/no-unsafe-return
            });
    }
}
