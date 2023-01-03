import { CoursesService } from './../services/courses.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent {

  constructor(
    private formBuilder: FormBuilder,
    private service: CoursesService,
    private _snackBar: MatSnackBar
  ) {
    this.form = this.formBuilder.group({
      name: [null],
      category: [null]
    });
  }

  form: FormGroup

  onSubmit() {
    this.service.save(this.form.value).subscribe(
      res => console.log(res),
      error => this.onError('Falha ao cadastrar o curso')
    );
  }

  onCancel() {

  }

  onError(message: string) {
    this._snackBar.open(message, '', { duration: 3000 });
  }

}
