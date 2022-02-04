import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryblokIconComponent } from './icon.component';

describe('StoryblokIconComponent', () => {
    let component: StoryblokIconComponent;
    let fixture: ComponentFixture<StoryblokIconComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [StoryblokIconComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(StoryblokIconComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
