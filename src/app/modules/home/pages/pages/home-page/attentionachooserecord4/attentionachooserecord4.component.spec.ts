import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Attentionachooserecord4Component } from './attentionachooserecord4.component';

describe('Attentionachooserecord4Component', () => {
  let component: Attentionachooserecord4Component;
  let fixture: ComponentFixture<Attentionachooserecord4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Attentionachooserecord4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Attentionachooserecord4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
