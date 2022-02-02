import { Component, Input, OnInit } from '@angular/core';
import { Components } from '../components.list';

import { StoryblokSectionModel } from '../../models';

@Component({
    selector: 'storyblok-section',
    templateUrl: './section.component.html',
    styleUrls: ['./section.component.scss'],
})
export class StoryblokSectionComponent implements OnInit {
    components = Components;
    @Input() content!: StoryblokSectionModel;

    ngOnInit(): void {
        if (this.content.layout) {
            this.content.style_classes += ` ${this.content.layout}`;
        }
    }
}
