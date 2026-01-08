/**
 * © 2025 moeridoe
 * Licensed under CC BY-NC-SA 4.0
 * https://creativecommons.org/licenses/by-nc-sa/4.0/
 */

import {ApplicationConfig, provideZonelessChangeDetection} from '@angular/core';
import {provideHttpClient} from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZonelessChangeDetection(),
    provideHttpClient(),
  ]
};
