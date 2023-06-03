import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  order = {
    form: '',
    phone: ''
  }

  constructor() { }
}
