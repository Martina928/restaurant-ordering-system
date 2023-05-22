import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointRedeemComponent } from './point-redeem.component';

describe('PointRedeemComponent', () => {
  let component: PointRedeemComponent;
  let fixture: ComponentFixture<PointRedeemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PointRedeemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PointRedeemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
