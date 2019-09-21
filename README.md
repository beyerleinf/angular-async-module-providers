# Angular async module providers

> Example repository showing how one can load config values asynchronously and provide them using ModuleWithProviders

## How does it work?

We're using `APP_INITIALIZER` to load a config from a arbitrary source. This could literally be done however you want. After loading, we save the values we need in properties of the service so that they are available after initialization.

Finally, we have a module (in this case `ConfigModule`) which uses the `forRoot` method to provide a InjectionToken with the value of a property loaded in our Service.

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
