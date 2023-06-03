import { Component, OnInit } from '@angular/core';
import { FORM } from '../../core/enums/form.enum';
import { OrderService } from '../../core/services/order.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ROUTING_PATH } from '../../core/const/routing-path.const';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  count: number = 0;
  inputForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private orderSrv: OrderService,
  ) {}

  imgBtn = [
    {
      title: '內用',
      img: './assets/image/dine-in-white.png',
      form : FORM.IN
    },
    {
      title: '外帶',
      img: './assets/image/take-out-white.png',
      form: FORM.OUT
    },
  ]

  ngOnInit(): void {
    setTimeout(() => {
      this.count += 1;
    }, 1000);

    this.inputForm = this.fb.group({
      phone: [''],
    }) 
  }

  /** 點選內用外帶
   *  @param form 用餐方式
  */
  setForm(form: FORM) {
    console.log(form)
    this.orderSrv.order.form = form;
    this.count += 1;
  }

  onSubmit() {
    const formValue = this.inputForm.value;
    console.log(formValue);
    this.orderSrv.order.phone = formValue;
    this.router.navigate([ROUTING_PATH.MENU]);
  }
}
