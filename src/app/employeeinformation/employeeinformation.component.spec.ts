import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeinformationComponent } from './employeeinformation.component';

describe('EmployeeinformationComponent', () => {
  let component: EmployeeinformationComponent;
  let fixture: ComponentFixture<EmployeeinformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeinformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeinformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
