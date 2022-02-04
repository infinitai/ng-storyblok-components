# Contributing

## Pre-installation

If you don't already have them, you will need Node (v 14.x) + NPM, and Yarn. The easiest way to get these are using Chocolatey (on Windows) or Homebrew (on Mac).

For Windows:

```
 @powershell -NoProfile -ExecutionPolicy Bypass -Command "iex ((new-object net.webclient).DownloadString('https://chocolatey.org/install.ps1'))" && SET PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin
 choco install nodejs.install
 choco install yarn
```

For Mac:

```
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
brew install node
brew install yarn
```

Test your version of node by typing `node -v` - you will need version 14.\*.

## Installation

Clone the repo and install the NPM packages using yarn:

```
git clone https://github.com/infinitai/ng-storyblok-helper.git
cd ng-storyblok-helper
yarn
```

## Unit Tests

Run tests once:

```
npm run test
```

Keep karma open:

```
npm run test:debug:chrome
```

## Contributing

1. Rebase production: `git pull --rebase`
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'feat(): Add some feature'`
4. Push to the branch: `git push origin my-new-feature`

**Note:** Branch name should not have uppercase and special character. Only `a-z 0-9 -` are supported.

## Commit message guidelines

Commit messages are linted using [commit-lint](https://github.com/marionebl/commitlint). Linting rules can be found in [package.json](https://github.com/nib-group/angular-wn/blob/master/package.json#L54). Commit messages should have mandatory `type` and `description`, also optional `scope`. Commit types should be as per Angular's [guidelines](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#type).

## Workflow considerations

Typescript - A modern text editor is recommended for their Typescript intellisense support - VS Code is cross-platofm and supports it out of the box!
Git - you may benefit from using a git GUI such as TortoiseGit or GITExtensions. Make sure you are familiar with merging and rebasing.

## Example Sublime Text Setup:

Install Sublime Text:

```
choco install sublimetext3
```

[Install Package Control for Sublime Text from here](https://packagecontrol.io/installation#st3).

Install the Typescript and SCSS package:

1. Press `Ctrl-Shift-P` to open the command palette
2. type `install`
3. Select the `Package Control: Install Package` option
4. Search for `Typescript` and select that package.
5. Restart Sublime Text.

## Helpful VS Code Packages

-   TSLint
-   Typescript Hero
-   Angular Language Service
