/**
 * © 2025 moeridoe
 * Licensed under CC BY-NC-SA 4.0
 * https://creativecommons.org/licenses/by-nc-sa/4.0/
 */

import {Component} from '@angular/core';
import {MatButton} from '@angular/material/button';
import {MatDialogActions, MatDialogClose, MatDialogTitle} from '@angular/material/dialog';

@Component({
  standalone: true,
  selector: 'app-win-dialog',
  imports: [
    MatDialogTitle,
    MatDialogActions,
    MatButton,
    MatDialogClose
  ],
  templateUrl: './win-dialog.component.html',
  styleUrl: './win-dialog.component.scss'
})
export class WinDialogComponent {}
