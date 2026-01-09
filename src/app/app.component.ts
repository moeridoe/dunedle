/**
 * © 2025 moeridoe
 * Licensed under CC BY-NC-SA 4.0
 * https://creativecommons.org/licenses/by-nc-sa/4.0/
 */

import {Component} from '@angular/core';
import {FooterComponent} from './components/footer/footer.component';
import {DunedleComponent} from './components/dunedle/dunedle.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FooterComponent,
    DunedleComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dunedle';
  version = 'v1.1.1';
}
