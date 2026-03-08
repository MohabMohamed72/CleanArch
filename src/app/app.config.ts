import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { headerInterceptorInterceptor } from '../base/ServicesHandler/header-interceptor-interceptor';
import { TEAM_REPO_TOKEN } from '../Team/Domain/RepoInterface/TeamRepo';
import { TeamRepo } from '../Team/Infrastructure/Repos/CreateTeamRepo';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(withInterceptors([headerInterceptorInterceptor])),
    { provide: TEAM_REPO_TOKEN, useClass: TeamRepo },
  ],
};
