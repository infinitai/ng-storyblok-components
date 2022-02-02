import { Component, Input } from '@angular/core';
import { Components } from '../components.list';
import { StoryblokPageModel } from '../../models';

@Component({
    selector: 'storyblok-page',
    templateUrl: './page.component.html',
    styleUrls: ['./page.component.scss'],
})
export class StoryblokPageComponent {
    components = Components;
    @Input() content!: StoryblokPageModel;
}
