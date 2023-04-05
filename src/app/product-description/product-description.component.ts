import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-description-page',
  templateUrl: './product-page.description.html',
  styleUrls: ['./product-page.description.css']
})
export class ProductDescriptionComponent implements OnInit {

  albuminfo;

  constructor(private _productService: ProductService) { }

  ngOnInit() {
    this._productService.getAlbum(1).subscribe(response => this.albumInfo = response);
  }

}
