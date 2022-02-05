# Storyblok

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.0.

## Code scaffolding

Run `ng generate component component-name --project storyblok` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project storyblok`.

> Note: Don't forget to add `--project storyblok` or else it will be added to the default project in your `angular.json` file.

## Build

Run `yarn build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Versioning

Before the package is built for release, the version needs to be upgraded. Open the terminal on `./projects/storyblok` folder. Execute the command that reflects the change.

-   to upgrade a major version: `yarn version:major`
-   to upgrade a minor version: `yarn version:minor`
-   to upgrade a patch version: `yarn version:patch`

## Build Release

Run `yarn build:prod` to build the project. This will build the artifacts similar to [Build](#Build), but with production based configuration.

## Packing (Optional)

You can choose to Pack the release using `yarn pack` command to generate the output tgz file.
This is only if you need to inspect the package that gets uploaded.
Otherwise, publish will automatically do this for you.

## Publishing

After building your library, run `yarn publish`. This will upload the package for you.

## Running unit tests

Run `ng test storyblok` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Generate shared components in your space

The component templates are created in JSON format for easy syncing purposes. You can find them at [template\components.json](./template/components.json).
To generate these components, run the command `yarn push-components $SPACE_ID` where $SPACE_ID is the id of your space.

> Be warned that if you already have a component matching the name of the shared component templates, these will override them.

The components follow a particular structure that's common to make life easier for the end users.
It provides inline styling or styling flexibility and remain agnostic to the styles used.
Only bootstrap template used is in the column for sizing purposes.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
