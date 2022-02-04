import { Component, Input, OnInit } from '@angular/core';
import { Components } from '../components.list';

import { StoryblokContainerModel } from '../../models';

@Component({
    selector: 'storyblok-container',
    templateUrl: './container.component.html',
    styleUrls: ['./container.component.scss'],
})
export class StoryblokContainerComponent implements OnInit {
    components = Components;
    @Input() content!: StoryblokContainerModel;

    ngOnInit(): void {
        if (this.content?.layout) {
            this.content.style_classes += ` ${this.content.layout}`;
        }
    }
}
