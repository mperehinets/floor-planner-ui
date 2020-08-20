import {Injectable} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {ConfirmDialogComponent} from '../component/confirm-dialog/confirm-dialog.component';

class TranslateService {
}

@Injectable({
  providedIn: 'root'
})
export class ConfirmService {

  constructor(private dialog: MatDialog) {
  }

  confirm(title: string, message: string): MatDialogRef<ConfirmDialogComponent> {
    return this.dialog.open(ConfirmDialogComponent, {
      data: {title, message},
      panelClass: 'confirm-dialog'
    });
  }
}
