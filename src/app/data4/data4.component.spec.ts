import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Data4Component } from './data4.component';

describe('Data4Component', () => {
  let component: Data4Component;
  let fixture: ComponentFixture<Data4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Data4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Data4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
