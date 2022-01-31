import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'sb-storyblok',
    template: '',
    styles: [],
})
export class StoryblokComponent implements OnInit {
    constructor() {
        console.log('constructor');
    }

    ngOnInit(): void {
        console.log('oninit');
    }
}
