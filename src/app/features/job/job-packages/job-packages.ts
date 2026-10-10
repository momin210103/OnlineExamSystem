// job-preparation.component.ts
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

interface ExamPackage {
  id: string;
  name: string;
  description: string;
  icon: string;
  price: number; // 0 = free
  examCount: number;
  duration: string;
  features: string[];
  popular?: boolean;
}

@Component({
  selector: 'app-job-preparation',
  standalone: true,
  imports: [RouterLink, MatCardModule, MatIconModule, MatButtonModule],
  templateUrl: './job-packages.html',
  styleUrl: './job-packages.css',
})
export class JobPackages {
  packages: ExamPackage[] = [
    {
      id: 'starter',
      name: 'Starter Pack',
      description: 'Try the platform with a few job model tests.',
      icon: 'rocket_launch',
      price: 0,
      examCount: 5,
      duration: '1 month',
      features: ['5 model tests', 'Instant results', 'Basic score report'],
    },
    {
      id: 'bcs',
      name: 'BCS Preliminary Pack',
      description: 'Complete preparation for the BCS preliminary exam.',
      icon: 'military_tech',
      price: 699,
      examCount: 60,
      duration: '4 months',
      features: [
        '60 timed mock exams',
        'Subject-wise practice',
        'Detailed answer explanations',
        'Leaderboard',
      ],
      popular: true,
    },
    {
      id: 'bank',
      name: 'Bank Job Pack',
      description: 'Math, English, GK and reasoning for bank recruitment tests.',
      icon: 'account_balance',
      price: 499,
      examCount: 40,
      duration: '3 months',
      features: [
        '40 timed mock exams',
        'Previous year questions',
        'Weak area report',
        'Leaderboard',
      ],
    },
    {
      id: 'primary-teacher',
      name: 'Primary Teacher Pack',
      description: 'Focused model tests for primary teacher recruitment.',
      icon: 'school',
      price: 399,
      examCount: 30,
      duration: '2 months',
      features: [
        '30 timed mock exams',
        'Chapter-wise practice',
        'Instant results',
        'Subject-wise analysis',
      ],
    },
    {
      id: 'ntrca',
      name: 'NTRCA Pack',
      description: 'Preparation for non-government teacher registration exams.',
      icon: 'menu_book',
      price: 449,
      examCount: 35,
      duration: '3 months',
      features: [
        '35 timed mock exams',
        'Previous year questions',
        'Detailed explanations',
        'Leaderboard',
      ],
    },
  ];
}