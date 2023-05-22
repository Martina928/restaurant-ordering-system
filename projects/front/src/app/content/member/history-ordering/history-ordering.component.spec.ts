import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryOrderingComponent } from './history-ordering.component';

describe('HistoryOrderingComponent', () => {
  let component: HistoryOrderingComponent;
  let fixture: ComponentFixture<HistoryOrderingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryOrderingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoryOrderingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
