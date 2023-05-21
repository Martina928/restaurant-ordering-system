import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointRedeemListComponent } from './point-redeem-list.component';

describe('PointRedeemListComponent', () => {
  let component: PointRedeemListComponent;
  let fixture: ComponentFixture<PointRedeemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PointRedeemListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PointRedeemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
