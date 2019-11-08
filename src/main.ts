import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { BASE_API_URL_TOKEN } from './app/injectors';

if (environment.production) {
  enableProdMode();
}

async function main() {
  try {
    const data = await fetch('/assets/config.json');
    const config = await data.json();

    await platformBrowserDynamic([
      { provide: BASE_API_URL_TOKEN, useValue: config.baseUrl },
    ]).bootstrapModule(AppModule);
  } catch (error) {
    console.error(error);
  }
}

main();
