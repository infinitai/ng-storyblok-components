import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
    selector: '[storyblok]',
})
export class StoryblokDirective implements OnInit {
    @Input() appStoryblok = '';

    constructor(private el: ElementRef) {}

    ngOnInit() {
        if (typeof this.appStoryblok === 'undefined') {
            return;
        }

        const options = JSON.parse(
            this.appStoryblok.replace('<!--#storyblok#', '').replace('-->', '')
        );

        this.el.nativeElement.setAttribute('data-blok-c', JSON.stringify(options)); // eslint-disable-line @typescript-eslint/restrict-template-expressions
        this.el.nativeElement.setAttribute('data-blok-uid', `${options.id}-${options.uid}`); // eslint-disable-line @typescript-eslint/restrict-template-expressions
    }
}
