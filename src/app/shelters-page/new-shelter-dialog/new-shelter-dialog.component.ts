import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-shelter-dialog',
  templateUrl: './new-shelter-dialog.component.html',
  styleUrls: ['./new-shelter-dialog.component.scss'],
})
export class NewShelterDialogComponent implements OnInit {
  formGroup = this.fb.group({
    name: this.fb.control('', Validators.required),
    address: this.fb.control('', Validators.required),
    phones: this.fb.control('', Validators.required),
    director: this.fb.control('', Validators.required),
  });

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<NewShelterDialogComponent>,
  ) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.formGroup.invalid) return;
    this.dialogRef.close(this.formGroup.value);
  }
}
