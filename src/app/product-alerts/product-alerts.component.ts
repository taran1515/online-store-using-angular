import { Component, OnInit } from '@angular/core';
import { Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {
  
  @Input() productPrice;
  @Output() notify = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}