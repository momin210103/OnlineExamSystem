import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ExamService {
  exams = [
    {
      id: 1,
      title: 'Angular Fundamentals',
      duration: 30,
      totalMarks: 50,
    },
    {
      id: 2,
      title: 'ASP.NET Core',
      duration: 45,
      totalMarks: 60,
    },
    {
      id: 3,
      title: 'C# Basics',
      duration: 30,
      totalMarks: 50,
    },
  ];

  getExam(){
    return this.exams;
  }
}
