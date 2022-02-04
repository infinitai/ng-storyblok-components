import { Component, Input } from '@angular/core';

import { StoryblokHtmlModel } from '../../models';

@Component({
    selector: 'storyblok-html',
    templateUrl: './html.component.html',
    styleUrls: ['./html.component.scss'],
})
export class StoryblokHtmlComponent {
    @Input() content!: StoryblokHtmlModel;
}
