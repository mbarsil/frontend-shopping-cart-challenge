import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CabifyModalComponent } from './cabify-modal.component';

describe('CabifyModalComponent', () => {
  let component: CabifyModalComponent;
  let fixture: ComponentFixture<CabifyModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CabifyModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CabifyModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
