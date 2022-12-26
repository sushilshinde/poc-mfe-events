import "zone.js";
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

// import { environment } from './environments/environment';

if (process.env['production']) {
  enableProdMode();
}

function mount() {
  platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err) => console.error(err));
}

export { mount };