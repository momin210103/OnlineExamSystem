import { PackageDetail, PackageExam } from '../models/package';

function makeExams(
  category: string,
  prefix: string,
  count: number,
  questions: number,
  duration: number,
  marks: number,
  freeCount = 2,
): PackageExam[] {
  return Array.from({ length: count }, (_, i) => ({
    id: `${prefix}-${i + 1}`,
    category,
    title: `Model Test ${i + 1}`,
    questions,
    duration,
    marks,
    isFree: i < freeCount,
  }));
}

export const PACKAGE_DETAILS: PackageDetail[] = [
  // University Admission
  {
    id: 'starter',
    category: 'university-admission',
    categoryLabel: 'University Admission',
    name: 'Starter Pack',
    description: 'Try the platform with a few model tests.',
    price: 0,
    icon: 'rocket_launch',

    duration: '1 month',
    features: ['5 model tests', 'Instant results', 'Basic score report'],
    exams: makeExams('university-admission', 'ua-starter', 5, 50, 30, 50),
  },
  {
    id: 'dhaka-university',
    category: 'university-admission',
    categoryLabel: 'University Admission',
    name: 'DU Admission Pack',
    description: 'Complete preparation for Dhaka University admission.',
    price: 499,
    icon: 'school',
    popular: true,
    duration: '3 months',
    features: [
      '40 timed mock exams',
      'Detailed answer explanations',
      'Subject-wise analysis',
      'Leaderboard',
    ],
    exams: makeExams('university-admission', 'du', 40, 100, 60, 100),
  },
  {
    id: 'engineering',
    category: 'university-admission',
    categoryLabel: 'University Admission',
    name: 'Engineering (BUET) Pack',
    description: 'Math, Physics and Chemistry focused tests.',
    price: 699,
    icon: 'engineering',
    duration: '4 months',
    features: ['50 timed mock exams', 'Chapter-wise practice', 'Weak area report', 'Leaderboard'],
    exams: makeExams('university-admission', 'buet', 50, 80, 90, 80),
  },
  {
      id: 'medical',
      category: 'university-admission',
      categoryLabel: 'University Admission',
      name: 'Medical Admission Pack',
      description: 'Biology, Chemistry and Physics for medical admission.',
      price: 599,
      duration: '4 months',
      features: [
          '45 timed mock exams',
          'Previous year questions',
          'Subject-wise analysis',
          'Leaderboard',
      ],
      exams: makeExams('university-admission', 'med', 45, 100, 60, 100),
      icon: ''
  },

  // Job Preparation
  {
      id: 'starter',
      category: 'job-preparation',
      categoryLabel: 'Job Preparation',
      name: 'Starter Pack',
      description: 'Try the platform with a few job model tests.',
      price: 0,
      duration: '1 month',
      features: ['5 model tests', 'Instant results', 'Basic score report'],
      exams: makeExams('job-preparation', 'job-starter', 5, 50, 30, 50),
      icon: ''
  },
  {
      id: 'bcs',
      category: 'job-preparation',
      categoryLabel: 'Job Preparation',
      name: 'BCS Preliminary Pack',
      description: 'Complete preparation for the BCS preliminary exam.',
      price: 699,
      duration: '4 months',
      features: [
          '60 timed mock exams',
          'Subject-wise practice',
          'Detailed answer explanations',
          'Leaderboard',
      ],
      exams: makeExams('job-preparation', 'bcs', 60, 200, 120, 200),
      icon: ''
  },
  {
      id: 'bank',
      category: 'job-preparation',
      categoryLabel: 'Job Preparation',
      name: 'Bank Job Pack',
      description: 'Math, English, GK and reasoning for bank recruitment tests.',
      price: 499,
      duration: '3 months',
      features: ['40 timed mock exams', 'Previous year questions', 'Weak area report', 'Leaderboard'],
      exams: makeExams('job-preparation', 'bank', 40, 100, 60, 100),
      icon: ''
  },
  {
      id: 'primary-teacher',
      category: 'job-preparation',
      categoryLabel: 'Job Preparation',
      name: 'Primary Teacher Pack',
      description: 'Focused model tests for primary teacher recruitment.',
      price: 399,
      duration: '2 months',
      features: [
          '30 timed mock exams',
          'Chapter-wise practice',
          'Instant results',
          'Subject-wise analysis',
      ],
      exams: makeExams('job-preparation', 'pt', 30, 100, 60, 100),
      icon: ''
  },
  {
      id: 'ntrca',
      category: 'job-preparation',
      categoryLabel: 'Job Preparation',
      name: 'NTRCA Pack',
      description: 'Preparation for non-government teacher registration exams.',
      price: 449,
      duration: '3 months',
      features: [
          '35 timed mock exams',
          'Previous year questions',
          'Detailed explanations',
          'Leaderboard',
      ],
      exams: makeExams('job-preparation', 'ntrca', 35, 100, 60, 100),
      icon: ''
  },
];

export function getPackage(category: string, id: string): PackageDetail | undefined {
  return PACKAGE_DETAILS.find((p) => p.category === category && p.id === id);
}
