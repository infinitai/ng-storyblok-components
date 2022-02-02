import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryblokHeadlineComponent } from './headline.component';

describe('StoryblokHeadlineComponent', () => {
    let component: StoryblokHeadlineComponent;
    let fixture: ComponentFixture<StoryblokHeadlineComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [StoryblokHeadlineComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(StoryblokHeadlineComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
