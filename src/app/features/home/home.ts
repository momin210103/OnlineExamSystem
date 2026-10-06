import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgClass, RouterLink, MatCardModule, MatIconModule, MatButtonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent {
  stats = [
    { icon: 'assignment', value: '50+', label: 'Exams' },
    { icon: 'people', value: '1,000+', label: 'Students' },
    { icon: 'help_outline', value: '5,000+', label: 'Questions' },
    { icon: 'bolt', value: 'Instant', label: 'Results' },
  ];

  categories = [
    {
      title: 'Job Preparation',
      description: 'Practice with model tests designed for job exams.',
      icon: 'menu_book',
      route: '/exams/job-preparation',
      color: 'indigo',
    },
    {
      title: 'University Admission',
      description: 'Prepare for admission tests with timed mock exams.',
      icon: 'assignment_ind',
      route: '/exams/university-admission',
      color: 'green',
    },
  ];

  features = [
    { icon: 'quiz', title: 'Online Exams', text: 'Take exams online anytime and from anywhere.' },
    {
      icon: 'analytics',
      title: 'Track Progress',
      text: 'See your score history and spot weak areas.',
    },
    {
      icon: 'bolt',
      title: 'Instant Results',
      text: 'Get your results immediately after submission.',
    },
  ];
}
