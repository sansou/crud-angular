import { CoursesService } from './../services/courses.service';
import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent {

  constructor(
    private formBuilder: UntypedFormBuilder,
    private service: CoursesService,
    private _snackBar: MatSnackBar,
    private location: Location
  ) {
    this.form = this.formBuilder.group({
      name: [null],
      category: [null]
    });
  }

  form: UntypedFormGroup

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
