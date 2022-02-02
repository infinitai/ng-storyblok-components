import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryblokImageComponent } from './image.component';

describe('StoryblokImageComponent', () => {
    let component: StoryblokImageComponent;
    let fixture: ComponentFixture<StoryblokImageComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [StoryblokImageComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(StoryblokImageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
