import { Component, Input, OnInit } from '@angular/core';
import { Components } from '../components.list';

import { StoryblokColumnModel } from '../../models';

@Component({
    selector: 'storyblok-column',
    templateUrl: './column.component.html',
    styleUrls: ['./column.component.scss'],
})
export class StoryblokColumnComponent implements OnInit {
    components = Components;
    @Input() content!: StoryblokColumnModel;

    ngOnInit(): void {
        if (this.content.width.xsmall) {
            this.content.style_classes += ` col-${this.content.width.xsmall}`;
        }
        if (this.content.width.small) {
            this.content.style_classes += ` col-sm-${this.content.width.small}`;
        }
        if (this.content.width.medium) {
            this.content.style_classes += ` col-md-${this.content.width.medium}`;
        }
        if (this.content.width.large) {
            this.content.style_classes += ` col-lg-${this.content.width.large}`;
        }
        if (this.content.width.xlarge) {
            this.content.style_classes += ` col-xl-${this.content.width.xlarge}`;
        }
    }
}
