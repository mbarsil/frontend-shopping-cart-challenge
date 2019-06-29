import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CabifyGridComponent } from './cabify-grid.component';

describe('CabifyGridComponent', () => {
  let component: CabifyGridComponent;
  let fixture: ComponentFixture<CabifyGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CabifyGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CabifyGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
