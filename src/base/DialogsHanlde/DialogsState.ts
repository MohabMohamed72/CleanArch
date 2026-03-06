import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SuccessContentComponent } from '../Dialogs/success-dialog/success-dialog';
@Injectable({ providedIn: 'root' })
export class DialogHanlde {
  constructor(private dialog: MatDialog) {}

  openDialog(
    message: string,
    image: string,
    enterAnimationDuration: string,
    exitAnimationDuration: string,
  ) {
    this.dialog.open(SuccessContentComponent, {
      width: '600px',
      data: {
        message: message,
        image: image,
      },
      enterAnimationDuration: enterAnimationDuration,
      exitAnimationDuration: exitAnimationDuration,
    });
  }

  closeDialog() {
    this.dialog.closeAll();
  }
}
