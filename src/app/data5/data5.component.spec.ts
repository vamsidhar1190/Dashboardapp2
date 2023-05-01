import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Data5Component } from './data5.component';

describe('Data5Component', () => {
  let component: Data5Component;
  let fixture: ComponentFixture<Data5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Data5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Data5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
