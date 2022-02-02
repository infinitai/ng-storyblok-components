import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryblokRowComponent } from './row.component';

describe('StoryblokRowComponent', () => {
    let component: StoryblokRowComponent;
    let fixture: ComponentFixture<StoryblokRowComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [StoryblokRowComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(StoryblokRowComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
