import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  constructor(public snackbar: MatSnackBar) { }

  open(msg: string, action: string) {
    setTimeout(() => {
      console.log("timer")
      this.snackbar.open(msg, action, {duration:5000,panelClass: ['black-snackbar']})
    }, 1000);
  }
}