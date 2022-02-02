import { NgModule } from '@angular/core';
import { DynamicModule } from 'ng-dynamic-component';

import { StoryblokDirective } from './directive/storyblok.directive';
import { StoryblokButtonComponent } from './components/button/button.component';
import { StoryblokHeadlineComponent } from './components/headline/headline.component';
import { StoryblokHtmlComponent } from './components/html/html.component';
import { StoryblokHyperlinkComponent } from './components/hyperlink/hyperlink.component';
import { StoryblokIconComponent } from './components/icon/icon.component';
import { StoryblokImageComponent } from './components/image/image.component';
import { StoryblokParagraphComponent } from './components/paragraph/paragraph.component';
import { StoryblokSpanComponent } from './components/span/span.component';
import { StoryblokColumnComponent } from './components/column/column.component';
import { StoryblokContainerComponent } from './components/container/container.component';
import { StoryblokPageComponent } from './components/page/page.component';
import { StoryblokRowComponent } from './components/row/row.component';
import { StoryblokSectionComponent } from './components/section/section.component';

@NgModule({
    declarations: [
        StoryblokDirective,

        StoryblokButtonComponent,
        StoryblokHeadlineComponent,
        StoryblokHtmlComponent,
        StoryblokHyperlinkComponent,
        StoryblokIconComponent,
        StoryblokImageComponent,
        StoryblokParagraphComponent,
        StoryblokSpanComponent,
        StoryblokColumnComponent,
        StoryblokContainerComponent,
        StoryblokPageComponent,
        StoryblokRowComponent,
        StoryblokSectionComponent,
    ],
    imports: [DynamicModule],
    exports: [
        StoryblokDirective,

        StoryblokButtonComponent,
        StoryblokHeadlineComponent,
        StoryblokHyperlinkComponent,
        StoryblokIconComponent,
        StoryblokImageComponent,
        StoryblokParagraphComponent,
        StoryblokSpanComponent,
        StoryblokColumnComponent,
        StoryblokContainerComponent,
        StoryblokPageComponent,
        StoryblokRowComponent,
        StoryblokSectionComponent,
    ],
})
export class StoryblokModule {}
