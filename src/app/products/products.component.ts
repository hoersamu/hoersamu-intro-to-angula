import { Component, OnInit } from '@angular/core';
import products from '../../assets/products.json';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products = products;

  constructor() {}

  ngOnInit(): void {}
}
