import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KpiChartComponent } from './kpi-chart.component';

describe('KpisComponent', () => {
  let component: KpiChartComponent;
  let fixture: ComponentFixture<KpiChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KpiChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KpiChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
