import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config'; // Assurez-vous que app.config.ts est correct
import { App } from './app/app'; // <--- Importe la classe 'App' que vous avez définie

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));