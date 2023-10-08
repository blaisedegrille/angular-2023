import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/app/models/user';

@Component({
  selector: 'ang23-base-edit-form',
  templateUrl: './base-edit-form.component.html',
  styleUrls: ['./base-edit-form.component.scss'],
})
export class BaseEditFormComponent implements OnInit {
  public form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<BaseEditFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      id: this.fb.control(this.data.id, []),
      name: this.fb.control(this.data.name, []),
      email: this.fb.control(this.data.email, []),
    });

    console.log('this.form: ', this.form);
    console.log('this.data: ', this.data);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
