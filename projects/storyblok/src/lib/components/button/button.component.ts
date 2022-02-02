import { Component, Input } from '@angular/core';

import { StoryblokLinkModel } from '../../models';

@Component({
    selector: 'storyblok-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
})
export class StoryblokButtonComponent {
    @Input() content!: StoryblokLinkModel;
}
