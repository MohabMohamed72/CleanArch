import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';

@Component({
  selector: 'app-success-content',
  templateUrl: './success-content.html',
  styleUrl: './success-dialog.scss',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
})
export class SuccessContentComponent {
  readonly data = inject(MAT_DIALOG_DATA);
  readonly dialogRef = inject(MatDialogRef<SuccessContentComponent>);
}

// @Component({
//   selector: 'app-success-dialog',
//   template: `<button mat-raised-button color="primary" (click)="openDialog()">
//     Open success dialog
//   </button>`,
//   standalone: true,
//   imports: [MatDialogModule, MatButtonModule],
//   changeDetection: ChangeDetectionStrategy.OnPush,
// })
// export class SuccessDialog {
//   private readonly dialog = inject(MatDialog);

//   openDialog() {
//     this.dialog.open(SuccessContentComponent, {
//       width: '600px',
//     });
//   }
// }
