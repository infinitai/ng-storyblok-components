import { Component, Input } from '@angular/core';
import { Components } from '../components.list';

import { StoryblokRowModel } from '../../models';

@Component({
    selector: 'storyblok-row',
    templateUrl: './row.component.html',
    styleUrls: ['./row.component.scss'],
})
export class StoryblokRowComponent {
    components = Components;
    @Input() content!: StoryblokRowModel;
}
