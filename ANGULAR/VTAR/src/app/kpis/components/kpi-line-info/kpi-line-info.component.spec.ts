import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KpiLineInfoComponent } from './kpi-line-info.component';

describe('KpiLineInfoComponent', () => {
  let component: KpiLineInfoComponent;
  let fixture: ComponentFixture<KpiLineInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KpiLineInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KpiLineInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
