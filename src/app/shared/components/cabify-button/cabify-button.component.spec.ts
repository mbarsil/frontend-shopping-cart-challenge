import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CabifyButtonComponent } from './cabify-button.component';

describe('CabifyButtonComponent', () => {
  let component: CabifyButtonComponent;
  let fixture: ComponentFixture<CabifyButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CabifyButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CabifyButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
