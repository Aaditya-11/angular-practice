import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componnent3Component } from './componnent-3.component';

describe('Componnent3Component', () => {
  let component: Componnent3Component;
  let fixture: ComponentFixture<Componnent3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Componnent3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Componnent3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
