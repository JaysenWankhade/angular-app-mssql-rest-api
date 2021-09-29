import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Student } from '../model/student.model';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css'],
})
export class CreateStudentComponent implements OnInit {
  student: Student = new Student();

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {}

  onSubmit() {
    this.studentService.insertStudent(this.student).subscribe((data) => {
      console.log(data);
      if (data.status === 'success') {
        alert('student added');
      } else {
        alert('unable to add student');
      }
    });
  }
}
