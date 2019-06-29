import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CabifySpanComponent } from './cabify-span.component';

describe('CabifySpanComponent', () => {
  let component: CabifySpanComponent;
  let fixture: ComponentFixture<CabifySpanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CabifySpanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CabifySpanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
