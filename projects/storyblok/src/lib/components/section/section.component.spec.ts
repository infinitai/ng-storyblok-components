import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryblokSectionComponent } from './section.component';

describe('StoryblokSectionComponent', () => {
    let component: StoryblokSectionComponent;
    let fixture: ComponentFixture<StoryblokSectionComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [StoryblokSectionComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(StoryblokSectionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
