import { Inject, Injectable } from '@angular/core';
import Client, { Richtext } from 'storyblok-js-client';

@Injectable({
    providedIn: 'root',
})
export class StoryblokService {
    private sbClient: Client;

    constructor(
        @Inject(String) token: string,
        @Inject(JSON) cacheSettings: { clear: 'auto'; type: 'memory' }
    ) {
        this.sbClient = new Client({
            accessToken: token,
            cache: cacheSettings,
        });
    }

    getStory(slug: string, params?: object): Promise<any> {
        return this.sbClient.getStory(slug, params).then((res) => res.data);
    }

    getStories(params?: object): Promise<any> {
        return this.sbClient.getStories(params).then((res) => res.data);
    }

    getContent(text: Richtext): string {
        return text ? this.sbClient.richTextResolver.render(text) : '';
    }

    getData(slug: string, params?: object): Promise<any> {
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
