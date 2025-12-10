import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componnent2Component } from './componnent-2.component';

describe('Componnent2Component', () => {
  let component: Componnent2Component;
  let fixture: ComponentFixture<Componnent2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Componnent2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Componnent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
