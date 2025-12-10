import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Register4Component } from './register4.component';

describe('Register4Component', () => {
  let component: Register4Component;
  let fixture: ComponentFixture<Register4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Register4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Register4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
