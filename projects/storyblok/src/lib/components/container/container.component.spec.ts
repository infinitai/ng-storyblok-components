import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryblokContainerComponent } from './container.component';

describe('StoryblokContainerComponent', () => {
    let component: StoryblokContainerComponent;
    let fixture: ComponentFixture<StoryblokContainerComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [StoryblokContainerComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(StoryblokContainerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
