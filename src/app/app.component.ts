import { Component } from '@angular/core';
import { Student } from './model/student.model';
import { StudentService } from './services/student.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-app';

  students: Student[] = [];

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.studentService.getStudents().subscribe((data) => {
      this.students = data;
    });
  }

  updateEmployee(id: Number) {}

  deleteEmployee(id: Number) {}

  employeeDetails(id: Number) {}
}
