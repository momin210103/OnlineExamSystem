import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

interface ExamQuestion {
  id: number;
  question: string;
  options: string[];
  selectedAnswer: number | null;
  markedForReview: boolean;
}

@Component({
  selector: 'app-take-exam',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule],
  templateUrl: './take-exam.html',
  styleUrl: './take-exam.css',
})
export class TakeExam implements OnInit, OnDestroy {
  currentIndex = 0;
  timeLeft = 60 * 60;
  submitted = false;
  private timerId?: ReturnType<typeof setInterval>;

  questions: ExamQuestion[] = [
    {
      id: 1,
      question: 'বাংলাদেশের জাতীয় ফুল কোনটি?',
      options: ['শাপলা', 'গোলাপ', 'জবা', 'বেলি'],
      selectedAnswer: null,
      markedForReview: false,
    },
    {
      id: 2,
      question: 'বাংলাদেশের রাজধানী কোনটি?',
      options: ['চট্টগ্রাম', 'ঢাকা', 'রাজশাহী', 'খুলনা'],
      selectedAnswer: null,
      markedForReview: false,
    },
    {
      id: 3,
      question: 'বাংলাদেশের জাতীয় ফল কোনটি?',
      options: ['আম', 'কাঁঠাল', 'লিচু', 'পেয়ারা'],
      selectedAnswer: null,
      markedForReview: false,
    },
  ];

  readonly optionLabels = ['ক', 'খ', 'গ', 'ঘ'];

  get currentQuestion(): ExamQuestion {
    return this.questions[this.currentIndex];
  }

  get answeredCount(): number {
    return this.questions.filter((q) => q.selectedAnswer !== null).length;
  }

  get markedCount(): number {
    return this.questions.filter((q) => q.markedForReview).length;
  }

  get unansweredCount(): number {
    return this.questions.length - this.answeredCount;
  }

  get formattedTime(): string {
    const minutes = Math.floor(this.timeLeft / 60);
    const seconds = this.timeLeft % 60;

    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  }

  ngOnInit(): void {
    this.timerId = setInterval(() => {
      if (this.timeLeft > 0 && !this.submitted) {
        this.timeLeft--;
      } else if (this.timeLeft === 0) {
        this.submitExam();
      }
    }, 1000);
  }

  ngOnDestroy(): void {
    if (this.timerId) clearInterval(this.timerId);
  }

  selectAnswer(optionIndex: number): void {
    // একবার উত্তর দেওয়া হলে আর পরিবর্তন করা যাবে না
    if (this.currentQuestion.selectedAnswer !== null) {
      return;
    }

    this.currentQuestion.selectedAnswer = optionIndex;
  }

  goToQuestion(index: number): void {
    if (index >= 0 && index < this.questions.length) {
      this.currentIndex = index;
    }
  }

  previousQuestion(): void {
    this.goToQuestion(this.currentIndex - 1);
  }

  nextQuestion(): void {
    this.goToQuestion(this.currentIndex + 1);
  }

  toggleReview(): void {
    this.currentQuestion.markedForReview = !this.currentQuestion.markedForReview;
  }

  getQuestionStatus(index: number): string {
    const q = this.questions[index];

    if (index === this.currentIndex) return 'current';
    if (q.markedForReview) return 'marked';
    if (q.selectedAnswer !== null) return 'answered';

    return 'unanswered';
  }

  submitExam(): void {
    if (this.submitted) return;

    const confirmed = confirm(
      `তুমি কি পরীক্ষা জমা দিতে চাও?\nউত্তর দিয়েছ: ${this.answeredCount}\nউত্তর দাওনি: ${this.unansweredCount}`,
    );

    if (confirmed) {
      this.submitted = true;
      if (this.timerId) clearInterval(this.timerId);
      alert(`পরীক্ষা জমা হয়েছে। উত্তর দিয়েছ ${this.answeredCount}টি।`);
    }
  }
}
