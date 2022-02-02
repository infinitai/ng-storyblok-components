import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryblokSpanComponent } from './span.component';

describe('StoryblokSpanComponent', () => {
    let component: StoryblokSpanComponent;
    let fixture: ComponentFixture<StoryblokSpanComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [StoryblokSpanComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(StoryblokSpanComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
