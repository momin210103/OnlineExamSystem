import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-exam-result',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './exam-result.html',
  styleUrl: './exam-result.css',
})
export class ExamResult {
  result = history.state?.result;

  constructor(private router: Router) {
    console.log('Negative Marks:', this.result?.negativeMarks);
  }

  goHome(): void {
    this.router.navigate(['/']);
  }
}
