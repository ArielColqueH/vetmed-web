import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Attentionagiveservice3Component } from './attentionagiveservice3.component';

describe('Attentionagiveservice3Component', () => {
  let component: Attentionagiveservice3Component;
  let fixture: ComponentFixture<Attentionagiveservice3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Attentionagiveservice3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Attentionagiveservice3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
