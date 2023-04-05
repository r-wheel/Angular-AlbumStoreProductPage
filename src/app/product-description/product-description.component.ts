import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

import { Album } from '../album';

@Component({
  selector: 'app-description-page',
  templateUrl: './product-page.description.html',
  styleUrls: ['./product-page.description.css']
})
export class ProductDescriptionComponent implements OnInit {

  albumInfo: Album;

  constructor(private _productService: ProductService) { }

  ngOnInit() {
    this._productService.getAlbum(1).subscribe(response => this.albumInfo = response);
  }

}
