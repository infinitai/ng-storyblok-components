import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryblokColumnComponent } from './column.component';

describe('StoryblokColumnComponent', () => {
    let component: StoryblokColumnComponent;
    let fixture: ComponentFixture<StoryblokColumnComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [StoryblokColumnComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(StoryblokColumnComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
