import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CabifyRowComponent } from './cabify-row.component';

describe('CabifyRowComponent', () => {
  let component: CabifyRowComponent;
  let fixture: ComponentFixture<CabifyRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CabifyRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CabifyRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
