import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import {ExamService} from '../../../app/core/services/exam'
@Component({
  selector: 'app-home',
  imports: [RouterLink, MatButtonModule, MatCardModule, FormsModule],
  templateUrl: './home.html',
})
export class HomeComponent {
  title = 'Online Exam System';

  description = 'Practice and take exams online';

  exams: any[] = [];
  constructor(private examService:ExamService){
    this.exams = this.examService.getExam();
  }
}
