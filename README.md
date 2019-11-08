# Angular async module providers

> Example repository showing how one can load config values asynchronously and provide them using InjectionTokens

**Note: The previous version of this solution can be found [here](https://github.com/beyerleinf/angular-async-module-providers/tree/previousVersion)**

## How does it work?

We load the config using `fetch` within _main.ts_. Then we pass our providers to `platformBrowserDynamic()`. And that's it.

## Building this repository

First you need to install all required packages

```
npm install
```

After you've done that, build the app and host it with whatever you prefer

```
npm run build
```

OR

serve it using the Angular CLI

```
npm start
```
