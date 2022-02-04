import { Component, Input } from '@angular/core';

import { StoryblokHeadlineModel } from '../../models';

@Component({
    selector: 'storyblok-headline',
    templateUrl: './headline.component.html',
    styleUrls: ['./headline.component.scss'],
})
export class StoryblokHeadlineComponent {
    @Input() content!: StoryblokHeadlineModel;
}
