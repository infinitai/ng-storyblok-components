# Storyblok Helper

This workplace contains projects related to Storyblok integration for Angular.
It provides shared components, models, service and directive to assist with Storyblok integration.
These can be imported into an Angular project that can use Storyblok.

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

## Documentation

-   [Project Storyblok guidelines](./projects/storyblok/README.md)
-   [Contributing guidelines for developers](./CONTRIBUTING.md)
