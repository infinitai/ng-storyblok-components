import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryblokParagraphComponent } from './paragraph.component';

describe('StoryblokParagraphComponent', () => {
    let component: StoryblokParagraphComponent;
    let fixture: ComponentFixture<StoryblokParagraphComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [StoryblokParagraphComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(StoryblokParagraphComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
