import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Attentionarecorddetail5Component } from './attentionarecorddetail5.component';

describe('Attentionarecorddetail5Component', () => {
  let component: Attentionarecorddetail5Component;
  let fixture: ComponentFixture<Attentionarecorddetail5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Attentionarecorddetail5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Attentionarecorddetail5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
