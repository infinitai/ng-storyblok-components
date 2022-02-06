# Shared Components

## Layout Components

### Page Component

The Page component represents the story content from Storyblok. This is a **Content Type** and can be rendered on its own.

This component allows only [Section](#section-component) components to be displayed in the body.

### Section Component

The Section component represents the `<section>` tag in HTML5.

This component allows only [Row](#row-component) components or [Container](#container-component) components in the body of the component.

### Container Component

The Container component represents `<div>` tags in HTML.

This component allows any type of component to be rendered within the body of the component.

### Row Component

The Row component represents the Grid design of the layout. You can find more information [here](https://getbootstrap.com/docs/5.1/layout/grid).

This renders HTML div tag as `<div class="row">`. This is based on Bootstrap's row design.

This component only allows [Column](#column-component) components in the body of the component.

### Column Component

The Column component represents the Column of the grid design.

This renders HTML div tag as `<div class="col">`. This is based on Bootstrap's column design.

### Call-to-Action Component

The Call-to-Action component is a reusable content that you can use in multiple places.

Unlike [Page](#page-component) component which renders the full page, this represents a portion of the page.

This component allows only [Section](#section-component) components to be displayed in the body.

## Element Components

### HTML Component

The HTML component is a `<div>` element that renders HTML Rich Text content.

The Rich Text rendering is provided via Storyblok generator.

### Button Component

The Button component represents `<button>` tags in HTML.

This component has the option for image and text properties in the configuration.
If an image property is set, the text property gets used as alt for the image.
If there's no image, it will use the text as the button label.

There's a property named external with boolean type to indicate if the button opens the link in a new page or in same page.

### Headline Component

The Headline component represents `<h#>` tags in HTML.

The type property allows user to choose the type of headline from 1 to 5.

### Hyperlink Component

The Hyperlink component represents `<a>` tags in HTML.
This is very similar to [Button](#button-component) component, but serves as a hyperlink.

This component has the option for image and text properties in the configuration.
If an image property is set, the text property gets used as alt for the image.
If there's no image, it will use the text as the button label.

There's a property named external with boolean type to indicate if the button opens the link in a new page or in same page.

### Icon Component

The Icon component represents `<i>` tags in HTML where icons can be applied.

If an url property is set for this component, the `<i>` tag is wrapped with a `<a>` link to make the icon clickable.

### Image Component

The Image component represents `<img>` tags in HTML.

### Paragraph Component

The Paragraph component represents `<p>` tags in HTML.

This renders HTML Rich Text content similar to [HTML](#html-component) component.

### Span Component

The Span component represents `<span>` tags in HTML.

It renders the content inline in the section.

## Style Fixes (Bootstrap)

If the style being used in your Angular project is Bootstrap 5+, there are some styles that needs overriding to get the content rendered correctly.

Because of the way some components are rendered via `<ndc-dynamic>`, an extra div gets added around which may affect the predefined styles in Bootstrap css.

### Reset Dynamic Component

Adding this style will exclude the dynamic div from creating an additional layer around it's content.

```
ndc-dynamic {
    display: none;
}
```

### Column Reset

Following style is required to remove extra styling around the content of the Column.

```
storyblok-column {
    display: contents;
}
```

Implementing this style will remove the padding that wasn't removed due to the [Column](#column-component) component being wrapped by another div during rendering.

```
.no-gutters > storyblok-column > div {
    padding-left: 0;
    padding-right: 0;
}
```

All elements within the Column needs the style below to be applied to get the Bootstrap style condition to work.

```
storyblok-column > * {
    max-width: 100%;
    padding-right: calc(var(--bs-gutter-x) * 0.5);
    padding-left: calc(var(--bs-gutter-x) * 0.5);
    margin-top: var(--bs-gutter-y);
}
```
