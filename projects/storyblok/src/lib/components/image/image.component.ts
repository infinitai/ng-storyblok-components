import { Component, Input } from '@angular/core';

import { StoryblokImageModel } from '../../models';

@Component({
    selector: 'storyblok-image',
    templateUrl: './image.component.html',
    styleUrls: ['./image.component.scss'],
})
export class StoryblokImageComponent {
    @Input() content!: StoryblokImageModel;
}
