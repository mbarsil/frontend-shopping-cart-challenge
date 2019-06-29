import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CabifyColComponent } from './cabify-col.component';

describe('CabifyColComponent', () => {
  let component: CabifyColComponent;
  let fixture: ComponentFixture<CabifyColComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CabifyColComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CabifyColComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
