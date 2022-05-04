import { Component, OnInit } from '@angular/core';

import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-add-ang-date',
  templateUrl: './add-ang-date.component.html',
  styleUrls: ['./add-ang-date.component.css'],
})
export class AddAngDateComponent implements OnInit {
  profileForm = this.fb.group({
    Title: ['', Validators.required],
    ReleaseDate: ['', Validators.required],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  get registerFormControl() {
    return this.profileForm.controls;
  }

  onSubmit() {
    console.warn(this.profileForm.value);
  }
}
