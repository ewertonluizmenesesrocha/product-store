import { Component, Injectable, inject } from '@angular/core';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ProductsService } from './products.service';
import { Observable } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-confirmation-dialog',
  template: `
    <h1 mat-dialog-title>Deletar produto</h1>
    <div mat-dialog-content>Tem certeza que quer deletar esse produto?</div>
    <div mat-dialog-actions align="end">
      <button mat-button (click)="onNo()">Não</button>
      <button
        mat-raised-button
        color="accent"
        (click)="onYes()"
        cdkFocusInitial
      >
        Sim
      </button>
    </div>
  `,
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
})
export class ConfirmationDialogComponent {
  matDialogRef = inject(MatDialogRef);

  onNo() {
    this.matDialogRef.close(false);
  }
  onYes() {
    this.matDialogRef.close(true);
  }
}

@Injectable({
  providedIn: 'root',
})

export class ConfirmationDialogService {
  productService = inject(ProductsService);
  router = inject(Router);
  matDialog = inject(MatDialog);

  constructor() {}

  openDialog(): Observable<boolean> {
    return this.matDialog.open(ConfirmationDialogComponent).afterClosed();
  }
}
