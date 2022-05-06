import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAngDateComponent } from './add-ang-date.component';

describe('AddAngDateComponent', () => {
  let component: AddAngDateComponent;
  let fixture: ComponentFixture<AddAngDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAngDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAngDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
