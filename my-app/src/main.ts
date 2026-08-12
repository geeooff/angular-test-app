import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { InMemoryDataService } from './app/core/services/in-memory-data.service';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes, withPreloading(PreloadAllModules)),
    provideHttpClient(withInterceptorsFromDi()),
    importProvidersFrom(
      NgbModule,
      HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false })
    )
  ]
})
  .catch(err => console.log(err));
