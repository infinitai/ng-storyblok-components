import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryblokButtonComponent } from './button.component';

describe('StoryblokButtonComponent', () => {
    let component: StoryblokButtonComponent;
    let fixture: ComponentFixture<StoryblokButtonComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [StoryblokButtonComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(StoryblokButtonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
