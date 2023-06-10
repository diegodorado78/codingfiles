import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtrusorComponent } from './extrusor.component';

describe('ExtrusorComponent', () => {
  let component: ExtrusorComponent;
  let fixture: ComponentFixture<ExtrusorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtrusorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtrusorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
