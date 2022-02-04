import { Component, Input } from '@angular/core';

import { StoryblokLinkModel } from '../../models';

@Component({
    selector: 'storyblok-hyperlink',
    templateUrl: './hyperlink.component.html',
    styleUrls: ['./hyperlink.component.scss'],
})
export class StoryblokHyperlinkComponent {
    @Input() content!: StoryblokLinkModel;
}
