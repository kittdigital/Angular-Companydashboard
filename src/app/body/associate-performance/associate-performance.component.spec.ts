import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociatePerformanceComponent } from './associate-performance.component';

describe('AssociatePerformanceComponent', () => {
  let component: AssociatePerformanceComponent;
  let fixture: ComponentFixture<AssociatePerformanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssociatePerformanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociatePerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
