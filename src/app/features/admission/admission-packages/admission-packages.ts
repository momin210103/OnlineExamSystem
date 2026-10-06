// university-admission.component.ts
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

interface ExamPackage {
  id: string;
  name: string;
  description: string;
  price: number; // 0 = free
  examCount: number;
  duration: string;
  features: string[];
  popular?: boolean;
}

@Component({
  selector: 'app-university-admission',
  standalone: true,
  imports: [RouterLink, MatCardModule, MatIconModule, MatButtonModule],
  templateUrl: './admission-packages.html',
  styleUrl: './admission-packages.css',
})
export class AdmissionPackages {
  packages: ExamPackage[] = [
    {
      id: 'starter',
      name: 'Starter Pack',
      description: 'Try the platform with a few model tests.',
      price: 0,
      examCount: 5,
      duration: '1 month',
      features: ['5 model tests', 'Instant results', 'Basic score report'],
    },
    {
      id: 'dhaka-university',
      name: 'DU Admission Pack',
      description: 'Complete preparation for Dhaka University admission.',
      price: 499,
      examCount: 40,
      duration: '3 months',
      features: [
        '40 timed mock exams',
        'Detailed answer explanations',
        'Subject-wise analysis',
        'Leaderboard',
      ],
      popular: true,
    },
    {
      id: 'engineering',
      name: 'Engineering (BUET) Pack',
      description: 'Math, Physics and Chemistry focused tests.',
      price: 699,
      examCount: 50,
      duration: '4 months',
      features: ['50 timed mock exams', 'Chapter-wise practice', 'Weak area report', 'Leaderboard'],
    },
    {
      id: 'medical',
      name: 'Medical Admission Pack',
      description: 'Biology, Chemistry and Physics for medical admission.',
      price: 599,
      examCount: 45,
      duration: '4 months',
      features: [
        '45 timed mock exams',
        'Previous year questions',
        'Subject-wise analysis',
        'Leaderboard',
      ],
    },
  ];
}
