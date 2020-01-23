import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MtdComponent } from './mtd.component';

describe('MtdComponent', () => {
  let component: MtdComponent;
  let fixture: ComponentFixture<MtdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MtdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MtdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
