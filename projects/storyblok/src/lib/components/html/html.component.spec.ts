import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryblokHtmlComponent } from './html.component';

describe('HtmlComponent', () => {
    let component: StoryblokHtmlComponent;
    let fixture: ComponentFixture<StoryblokHtmlComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [StoryblokHtmlComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(StoryblokHtmlComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
