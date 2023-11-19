import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app-routing.module';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';

import { provideToastr } from 'ngx-toastr';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
    provideClientHydration(),
    provideAnimations(),
    provideToastr({
      timeOut: 5000,
      positionClass: 'bottom-right',
      preventDuplicates: true,
      toastClass: 'alert alert-success alert-dismissible fade show'
  })]
};
