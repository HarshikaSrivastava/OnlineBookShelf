import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';


@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
  }

  addNewProduct(form){
    console.log(form.value);

    let newProduct = {
        id: 12,
        categoryId: form.value.product_category,
        productName: form.value.product_name,
        author: form.value.product_author,
        rating: form.value.product_rating,
        price: form.value.product_price,
        productImg: '',
        isAvailable: 1,
        category: form.value.product_category,
        reviews: form.value.product_category,
    };

    console.log(newProduct);

    this.productsService.createProduct(newProduct).subscribe(data => {
      console.log(data);
    });

  }
}