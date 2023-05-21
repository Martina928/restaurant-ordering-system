import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointCategoryComponent } from './point-category.component';

describe('PointCategoryComponent', () => {
  let component: PointCategoryComponent;
  let fixture: ComponentFixture<PointCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PointCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PointCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
