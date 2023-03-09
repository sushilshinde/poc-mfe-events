import "zone.js";
import { AppModule } from './app/app.module';
import { platformBrowser } from "@angular/platform-browser";

import { enableProdMode } from "@angular/core";

if (process.env['production']) {
  enableProdMode();
}

/*----------BROWSER SUPPORT-----------------------*/ 
const ngVersion = require('../../../package.json').dependencies['@angular/core']; // better just take the major version 
(window as any).plattform = (window as any).plattform || {};
let platform = (window as any).plattform[ngVersion];
if (!platform) {
  platform = platformBrowser();
  (window as any).plattform[ngVersion] = platform; 
}
/*----------BROWSER SUPPORT-----------------------*/ 

function mount() {
  platform.bootstrapModule(AppModule)
  .catch((err: any) => console.error(err));
}

export { mount };