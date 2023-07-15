import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CoursesService } from './../services/courses.service';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent {

  form = this.formBuilder.group({
    name: [''],
    category: ['']
  });

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private service: CoursesService,
    private _snackBar: MatSnackBar,
    private location: Location
  ) {
  }


  onSubmit() {
    this.service.save(this.form.value).subscribe(
      res => this.onSucesso('Curso salvo com sucesso'),
      error => this.onError('Falha ao cadastrar o curso')
    );
  }

  onCancel() {
    this.location.back();
  }

  private onSucesso(message: string) {
    this._snackBar.open(message, '', { duration: 3000 });
    this.onCancel();
  }
  private onError(message: string) {
    this._snackBar.open(message, '', { duration: 3000 });
  }

}
