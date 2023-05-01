import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Data7Component } from './data7.component';

describe('Data7Component', () => {
  let component: Data7Component;
  let fixture: ComponentFixture<Data7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Data7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Data7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
