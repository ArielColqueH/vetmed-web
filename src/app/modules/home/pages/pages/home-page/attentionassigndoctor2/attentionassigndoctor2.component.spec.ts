import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Attentionassigndoctor2Component } from './attentionassigndoctor2.component';

describe('Attentionassigndoctor2Component', () => {
  let component: Attentionassigndoctor2Component;
  let fixture: ComponentFixture<Attentionassigndoctor2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Attentionassigndoctor2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Attentionassigndoctor2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
