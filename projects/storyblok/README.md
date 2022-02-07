# Storyblok

## Usage

### Package Installation

To add the package to your project, you need to register a Personal Access Token (PAT) for Github packages.
This will provide you access to retrieve the package using NPM cli.

You can find the instructions on how to install the package [here](https://docs.github.com/en/packages/learn-github-packages/installing-a-package).

You can find more information about getting your own Github Personal Access Token (PAT) [here](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token).

Once you have installed the package, you can start using it in your project.

### Add Storyblok Bridge Script

Add the Javascript bridge below to `index.html` of your project.

```
<script src="http://app.storyblok.com/f/storyblok-latest.js?t=Q2mIMuV6frKpnmQlOee0rAtt" type="text/javascript"></script>
```

### Add Environment Values for Storyblok

When you setup a Storyblok space, you can generate API keys for different access levels.
Two of them are **public** and **preview** (draft).
You can configure in your environment files in the angular project.

-   For development, you can use the **preview** token with the version value set as **draft**.
-   For production, you can use the **public** token with the version value set as **publish**.

```
export const environment = {
    storyblok: {
        token: <!-- STORYBLOK TOKEN -->,
        version: [draft | published],
    },
};
```

### Initialize Storyblok Service

In the AppModule of your project, you need to setup the provider.

It uses the environment specific values for the token and version with the default cache settings configured for memory.

```
@NgModule({
    declarations: [
      ...
    ],
    imports: [
      ...
    ],
    providers: [
      ...
      // storyblok
      [
        {provide: 'storyblokAccessToken', useValue: environment.storyblok.token},
        {provide: 'storyblokVersion', useValue: environment.storyblok.version},
        {provide: 'storyblokCacheSettings', useValue: { clear: 'auto', type: 'memory' }},
      ]
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
```

Once the providers are configured, then you can use the service in any component as shown below.
The service constructor will be injected with the providers configured in the module above.

```
import {Components, StoryblokService, StoryblokStoryModel} from "@infinitai/ng-storyblok-helper";

@Component({
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
    story!: StoryblokStoryModel;
    components = Components;

    constructor(private readonly storyblokService: StoryblokService) { }

    ngOnInit(): void {
        this.storyblokService
            .getStory(`home`)
            .then((data) => {
                this.story = data.story;
            });
    }
}
```

## Generate shared components in your space

The component templates are created in JSON format for easy syncing purposes. You can find them at [template\components.json](./template/components.json).
To generate these components, run the command `yarn push-components $SPACE_ID` where $SPACE_ID is the id of your space.

> Be warned that if you already have a component matching the name of the shared component templates, these will override them.

The components follow a particular structure that's common to make life easier for the end users.
It provides inline styling or styling flexibility and remain agnostic to the styles used.
Only bootstrap template used is in the column for sizing purposes.

## Documentation

-   [Components Guide](./COMPONENTS.md)
-   [Contributing guidelines for developers](./CONTRIBUTING.md)
-   [Storyblok Developer Guide for Angular](https://www.storyblok.com/tp/add-a-headless-cms-to-angular-in-5-minutes)

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
