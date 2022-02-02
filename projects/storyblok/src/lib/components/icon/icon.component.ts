import { Component, Input, OnInit } from '@angular/core';

import { StoryblokIconModel } from '../../models';

@Component({
    selector: 'storyblok-icon',
    templateUrl: './icon.component.html',
    styleUrls: ['./icon.component.scss'],
})
export class StoryblokIconComponent implements OnInit {
    @Input() content!: StoryblokIconModel;

    ngOnInit(): void {
        if (this.content.icon.type) {
            this.content.style_classes += ` ${this.content.icon.type} ${this.content.icon.icon}`; // eslint-disable-line @typescript-eslint/restrict-template-expressions
        } else {
            this.content.style_classes += ` ${this.content.icon.icon}`; // eslint-disable-line @typescript-eslint/restrict-template-expressions
        }
    }
}
