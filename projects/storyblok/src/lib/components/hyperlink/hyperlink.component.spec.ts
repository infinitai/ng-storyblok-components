import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryblokHyperlinkComponent } from './hyperlink.component';

describe('StoryblokHyperlinkComponent', () => {
    let component: StoryblokHyperlinkComponent;
    let fixture: ComponentFixture<StoryblokHyperlinkComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [StoryblokHyperlinkComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(StoryblokHyperlinkComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
