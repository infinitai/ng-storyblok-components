import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryblokComponent } from './storyblok.component';

describe('StoryblokComponent', () => {
    let component: StoryblokComponent;
    let fixture: ComponentFixture<StoryblokComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [StoryblokComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(StoryblokComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
