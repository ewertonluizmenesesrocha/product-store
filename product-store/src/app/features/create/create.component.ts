import { Component, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductsService } from '../../shared/services/products.service';
import { Router } from '@angular/router';
import { FormComponent } from '../../shared/component/form/form.component';
import { Product } from '../../shared/interfaces/product.interfaces';
import { BackToListComponent } from '../../shared/component/back-to-list/back-to-list.component';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [FormComponent, BackToListComponent],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss',
})
export class CreateComponent {
  productsService = inject(ProductsService);

  matSnackBar = inject(MatSnackBar);
  router = inject(Router);

  onSubmit(product: Product) {
    this.productsService.post(product).subscribe(() => {
      this.matSnackBar.open('Produto criado com sucesso!', 'OK');

      this.router.navigateByUrl('/');
    });
  }
}
