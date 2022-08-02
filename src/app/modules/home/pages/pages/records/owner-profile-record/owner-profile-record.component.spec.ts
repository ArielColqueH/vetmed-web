import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerProfileRecordComponent } from './owner-profile-record.component';

describe('OwnerProfileRecordComponent', () => {
  let component: OwnerProfileRecordComponent;
  let fixture: ComponentFixture<OwnerProfileRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnerProfileRecordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OwnerProfileRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
