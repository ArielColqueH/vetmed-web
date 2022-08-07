import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Attentiontakeweight1Component } from './attentiontakeweight1.component';

describe('Attentiontakeweight1Component', () => {
  let component: Attentiontakeweight1Component;
  let fixture: ComponentFixture<Attentiontakeweight1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Attentiontakeweight1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Attentiontakeweight1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
