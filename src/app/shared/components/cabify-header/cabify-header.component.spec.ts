import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CabifyHeaderComponent } from './cabify-header.component';

describe('CabifyHeaderComponent', () => {
  let component: CabifyHeaderComponent;
  let fixture: ComponentFixture<CabifyHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CabifyHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CabifyHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
