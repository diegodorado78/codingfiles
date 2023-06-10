import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WinderComponent } from './winder.component';

describe('WinderComponent', () => {
  let component: WinderComponent;
  let fixture: ComponentFixture<WinderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
