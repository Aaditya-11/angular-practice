import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componnent1Component } from './componnent-1.component';

describe('Componnent1Component', () => {
  let component: Componnent1Component;
  let fixture: ComponentFixture<Componnent1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Componnent1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Componnent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
