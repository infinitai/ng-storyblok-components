import { Component, Input } from '@angular/core';

import { StoryblokService } from '../../service/storyblok.service';
import { StoryblokParagraphModel } from '../../models';

@Component({
    selector: 'storyblok-paragraph',
    templateUrl: './paragraph.component.html',
    styleUrls: ['./paragraph.component.scss'],
})
export class StoryblokParagraphComponent {
    @Input() content!: StoryblokParagraphModel;

    constructor(private storyblokService: StoryblokService) {}

    getContent(): string {
        return this.storyblokService.getContent(this.content.text);
    }
}
