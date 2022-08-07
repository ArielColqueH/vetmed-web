import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Attentionlaststep6Component } from './attentionlaststep6.component';

describe('Attentionlaststep6Component', () => {
  let component: Attentionlaststep6Component;
  let fixture: ComponentFixture<Attentionlaststep6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Attentionlaststep6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Attentionlaststep6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
