import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDoctorPageComponent } from './edit-doctor-page.component';

describe('EditDoctorPageComponent', () => {
  let component: EditDoctorPageComponent;
  let fixture: ComponentFixture<EditDoctorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDoctorPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditDoctorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
