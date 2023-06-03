import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-img-btn',
  templateUrl: './img-btn.component.html',
  styleUrls: ['./img-btn.component.scss']
})
export class ImgBtnComponent {
  @Input() img!: string;
  @Input() title!: string;
}
