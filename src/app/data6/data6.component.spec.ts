import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Data6Component } from './data6.component';

describe('Data6Component', () => {
  let component: Data6Component;
  let fixture: ComponentFixture<Data6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Data6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Data6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
