import { Component, Input } from '@angular/core';

import { StoryblokSpanModel } from '../../models';

@Component({
    selector: 'storyblok-span',
    templateUrl: './span.component.html',
    styleUrls: ['./span.component.scss'],
})
export class StoryblokSpanComponent {
    @Input() content!: StoryblokSpanModel;
}
