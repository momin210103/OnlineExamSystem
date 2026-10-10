export interface PackageExam {
  id: string;
  title: string;
  questions: number;
  duration: number; // minutes
  marks: number;
  isFree: boolean;
  category: string;
}
export interface PackageDetail {
  id: string;
  category: string;
  categoryLabel: string;
  name: string;
  description: string;
  price: number; // 0 = free
  icon: string; // নতুন
  popular?: boolean; // নতুন
  duration: string;
  features: string[];
  exams: PackageExam[];
}
