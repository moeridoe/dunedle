/**
 * © 2025 moeridoe
 * Licensed under CC BY-NC-SA 4.0
 * https://creativecommons.org/licenses/by-nc-sa/4.0/
 */

import {Component, input} from "@angular/core";
import {MatDialog} from '@angular/material/dialog';

import {DisclaimerDialogComponent} from '../disclaimer-dialog/disclaimer-dialog.component';

@Component({
  standalone: true,
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
    version = input.required<string>();

    constructor(private readonly matDialog: MatDialog) {}

    openDisclaimerDialog() {
      this.matDialog.open(DisclaimerDialogComponent);
    }
}
