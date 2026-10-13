import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

interface ExamQuestion {
  id: number;
  question: string;
  options: string[];
  selectedAnswer: number | null;
  markedForReview: boolean;
  correctedAnswer?: number; // Optional property for the correct answer index
  marks: number; // Optional property for the marks allocated to the question
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
  constructor(private router: Router) {}

  questions: ExamQuestion[] = [
    {
      id: 1,
      question: 'বাংলাদেশের জাতীয় ফুল কোনটি?',
      options: ['শাপলা', 'গোলাপ', 'জবা', 'বেলি'],
      selectedAnswer: null,
      markedForReview: false,
      correctedAnswer: 0,
      marks: 1,
    },
    {
      id: 2,
      question: 'বাংলাদেশের রাজধানী কোনটি?',
      options: ['চট্টগ্রাম', 'ঢাকা', 'রাজশাহী', 'খুলনা'],
      selectedAnswer: null,
      markedForReview: false,
      correctedAnswer: 1,
      marks: 1,
    },
    {
      id: 3,
      question: 'বাংলাদেশের জাতীয় ফল কোনটি?',
      options: ['আম', 'কাঁঠাল', 'লিচু', 'পেয়ারা'],
      selectedAnswer: null,
      markedForReview: false,
      correctedAnswer: 1,
      marks: 1,
    },
    {
      id: 4,
      question: 'বাংলাদেশের জাতীয় পাখি কোনটি?',
      options: ['কাক', 'দোয়েল', 'শালিক', 'কোকিল'],
      selectedAnswer: null,
      markedForReview: false,
      correctedAnswer: 1,
      marks: 1,
    },
    {
      id: 5,
      question: 'বাংলাদেশের জাতীয় পশু কোনটি?',
      options: ['হাতি', 'হরিণ', 'রয়েল বেঙ্গল টাইগার', 'সিংহ'],
      selectedAnswer: null,
      markedForReview: false,
      correctedAnswer: 2,
      marks: 1,
    },
    {
      id: 6,
      question: 'বাংলাদেশের জাতীয় মাছ কোনটি?',
      options: ['রুই', 'কাতলা', 'ইলিশ', 'পাঙ্গাশ'],
      selectedAnswer: null,
      markedForReview: false,
      correctedAnswer: 2,
      marks: 1,
    },
    {
      id: 7,
      question: 'বাংলাদেশের স্বাধীনতা দিবস কবে?',
      options: ['২১ ফেব্রুয়ারি', '২৬ মার্চ', '১৬ ডিসেম্বর', '৭ মার্চ'],
      selectedAnswer: null,
      markedForReview: false,
      correctedAnswer: 1,
      marks: 1,
    },
    {
      id: 8,
      question: 'বাংলাদেশের বিজয় দিবস কবে?',
      options: ['২৬ মার্চ', '২১ ফেব্রুয়ারি', '১৬ ডিসেম্বর', '১৪ ডিসেম্বর'],
      selectedAnswer: null,
      markedForReview: false,
      correctedAnswer: 2,
      marks: 1,
    },
    {
      id: 9,
      question: 'বাংলাদেশের ভাষা আন্দোলনের শহীদ দিবস কবে?',
      options: ['২৬ মার্চ', '২১ ফেব্রুয়ারি', '১৬ ডিসেম্বর', '১ মে'],
      selectedAnswer: null,
      markedForReview: false,
      correctedAnswer: 1,
      marks: 1,
    },
    {
      id: 10,
      question: 'বাংলাদেশের জাতীয় স্মৃতিসৌধ কোথায় অবস্থিত?',
      options: ['সাভার', 'কুমিল্লা', 'সিলেট', 'রংপুর'],
      selectedAnswer: null,
      markedForReview: false,
      correctedAnswer: 0,
      marks: 1,
    },
    {
      id: 11,
      question: 'বাংলাদেশের মুদ্রার নাম কী?',
      options: ['রুপি', 'টাকা', 'রিঙ্গিত', 'রিয়াল'],
      selectedAnswer: null,
      markedForReview: false,
      correctedAnswer: 1,
      marks: 1,
    },
    {
      id: 12,
      question: 'বাংলাদেশের জাতীয় কবি কে?',
      options: ['রবীন্দ্রনাথ ঠাকুর', 'জসীমউদ্দীন', 'কাজী নজরুল ইসলাম', 'সুকান্ত ভট্টাচার্য'],
      selectedAnswer: null,
      markedForReview: false,
      correctedAnswer: 2,
      marks: 1,
    },
    {
      id: 13,
      question: 'বাংলাদেশের জাতীয় সংগীতের রচয়িতা কে?',
      options: ['কাজী নজরুল ইসলাম', 'রবীন্দ্রনাথ ঠাকুর', 'জসীমউদ্দীন', 'দ্বিজেন্দ্রলাল রায়'],
      selectedAnswer: null,
      markedForReview: false,
      correctedAnswer: 1,
      marks: 1,
    },
    {
      id: 14,
      question: 'বাংলাদেশের জাতীয় সংগীতের প্রথম লাইন কোনটি?',
      options: ['আমার সোনার বাংলা', 'চল চল চল', 'ধনধান্যে পুষ্পে ভরা', 'ও আমার দেশের মাটি'],
      selectedAnswer: null,
      markedForReview: false,
      correctedAnswer: 0,
      marks: 1,
    },
    {
      id: 15,
      question: 'বাংলাদেশের বৃহত্তম ম্যানগ্রোভ বন কোনটি?',
      options: ['মধুপুর বন', 'লাউয়াছড়া বন', 'সুন্দরবন', 'ভাওয়াল বন'],
      selectedAnswer: null,
      markedForReview: false,
      correctedAnswer: 2,
      marks: 1,
    },
    {
      id: 16,
      question: 'বাংলাদেশের দীর্ঘতম সমুদ্রসৈকত কোথায়?',
      options: ['কুয়াকাটা', 'কক্সবাজার', 'পতেঙ্গা', 'পারকি'],
      selectedAnswer: null,
      markedForReview: false,
      correctedAnswer: 1,
      marks: 1,
    },
    {
      id: 17,
      question: 'বাংলাদেশের প্রধান সমুদ্রবন্দর কোনটি?',
      options: ['মোংলা', 'পায়রা', 'চট্টগ্রাম', 'নারায়ণগঞ্জ'],
      selectedAnswer: null,
      markedForReview: false,
      correctedAnswer: 2,
      marks: 1,
    },
    {
      id: 18,
      question: 'বাংলাদেশের জাতীয় সংসদ ভবনের স্থপতি কে?',
      options: ['এফ আর খান', 'লুই আই কান', 'মাজহারুল ইসলাম', 'পল রুডলফ'],
      selectedAnswer: null,
      markedForReview: false,
      correctedAnswer: 1,
      marks: 1,
    },
    {
      id: 19,
      question: 'বাংলাদেশের প্রথম কৃত্রিম উপগ্রহের নাম কী?',
      options: ['বঙ্গবন্ধু-১', 'বিজয়-১', 'বাংলা-১', 'পদ্মা-১'],
      selectedAnswer: null,
      markedForReview: false,
      correctedAnswer: 0,
      marks: 1,
    },
    {
      id: 20,
      question: 'বাংলাদেশের কেন্দ্রীয় ব্যাংকের নাম কী?',
      options: ['সোনালী ব্যাংক', 'বাংলাদেশ ব্যাংক', 'জনতা ব্যাংক', 'অগ্রণী ব্যাংক'],
      selectedAnswer: null,
      markedForReview: false,
      correctedAnswer: 1,
      marks: 1,
    },
    {
      id: 21,
      question: 'বাংলাদেশের জাতীয় বৃক্ষ কোনটি?',
      options: ['আমগাছ', 'বটগাছ', 'নারিকেলগাছ', 'কাঁঠালগাছ'],
      selectedAnswer: null,
      markedForReview: false,
      correctedAnswer: 0,
      marks: 1,
    },
    {
      id: 22,
      question: 'বাংলাদেশের জাতীয় খেলা কোনটি?',
      options: ['ক্রিকেট', 'ফুটবল', 'কাবাডি', 'হকি'],
      selectedAnswer: null,
      markedForReview: false,
      correctedAnswer: 2,
      marks: 1,
    },
    {
      id: 23,
      question: 'বাংলাদেশের মুক্তিযুদ্ধ কত সালে সংঘটিত হয়?',
      options: ['১৯৫২', '১৯৬৯', '১৯৭১', '১৯৭৫'],
      selectedAnswer: null,
      markedForReview: false,
      correctedAnswer: 2,
      marks: 1,
    },
    {
      id: 24,
      question: 'বাংলাদেশের প্রথম প্রধানমন্ত্রী কে ছিলেন?',
      options: ['তাজউদ্দীন আহমদ', 'শেখ মুজিবুর রহমান', 'সৈয়দ নজরুল ইসলাম', 'এম মনসুর আলী'],
      selectedAnswer: null,
      markedForReview: false,
      correctedAnswer: 0,
      marks: 1,
    },
    {
      id: 25,
      question: 'বাংলাদেশের জাতীয় পতাকার প্রধান দুটি রং কী?',
      options: ['নীল ও সাদা', 'লাল ও সবুজ', 'লাল ও হলুদ', 'সবুজ ও সাদা'],
      selectedAnswer: null,
      markedForReview: false,
      correctedAnswer: 1,
      marks: 1,
    },
    {
      id: 26,
      question: 'পদ্মা সেতু কোন নদীর ওপর নির্মিত?',
      options: ['যমুনা', 'মেঘনা', 'পদ্মা', 'তিস্তা'],
      selectedAnswer: null,
      markedForReview: false,
      correctedAnswer: 2,
      marks: 1,
    },
    {
      id: 27,
      question: 'বাংলাদেশের জাতীয় মসজিদের নাম কী?',
      options: ['ষাট গম্বুজ মসজিদ', 'বায়তুল মোকাররম', 'তারাবি মসজিদ', 'আতিয়া মসজিদ'],
      selectedAnswer: null,
      markedForReview: false,
      correctedAnswer: 1,
      marks: 1,
    },
    {
      id: 28,
      question: 'বাংলাদেশের আয়তনে বৃহত্তম জেলা কোনটি?',
      options: ['চট্টগ্রাম', 'রাঙামাটি', 'খুলনা', 'কক্সবাজার'],
      selectedAnswer: null,
      markedForReview: false,
      correctedAnswer: 1,
      marks: 1,
    },
    {
      id: 29,
      question: 'বাংলাদেশের জাতীয় জাদুঘর কোথায় অবস্থিত?',
      options: ['রাজশাহী', 'ঢাকা', 'চট্টগ্রাম', 'খুলনা'],
      selectedAnswer: null,
      markedForReview: false,
      correctedAnswer: 1,
      marks: 1,
    },
    {
      id: 30,
      question: 'বাংলাদেশের সংবিধান কার্যকর হয় কবে?',
      options: ['২৬ মার্চ ১৯৭১', '১৬ ডিসেম্বর ১৯৭২', '৪ নভেম্বর ১৯৭২', '২১ ফেব্রুয়ারি ১৯৫২'],
      selectedAnswer: null,
      markedForReview: false,
      correctedAnswer: 1,
      marks: 1,
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
      `তুমি কি পরীক্ষা জমা দিতে চাও?\n` +
        `উত্তর দিয়েছ: ${this.answeredCount}\n` +
        `উত্তর দাওনি: ${this.unansweredCount}`,
    );

    if (!confirmed) return;

    const totalQuestions = this.questions.length;

    const answeredQuestions = this.questions.filter((q) => q.selectedAnswer !== null);

    const correctAnswers = answeredQuestions.filter(
      (q) => q.selectedAnswer === q.correctedAnswer,
    ).length;

    const wrongAnswered = answeredQuestions.filter(
      (q) => q.selectedAnswer !== q.correctedAnswer,
    ).length;

    const unansweredQuestions = totalQuestions - answeredQuestions.length;

    // Example marking system
    const marksPerQuestion = 1;
    const negativeMarkPerWrong = 0.25;

    const totalMarks = totalQuestions * marksPerQuestion;

    const negativeMarks = wrongAnswered * negativeMarkPerWrong;

    const obtainedMarks = Math.max(0, correctAnswers * marksPerQuestion - negativeMarks);

    const percentage = totalMarks > 0 ? Number(((obtainedMarks / totalMarks) * 100).toFixed(2)) : 0;

    const result = {
      totalQuestions,
      answered: answeredQuestions.length,
      correct: correctAnswers,
      wrong: wrongAnswered,
      unanswered: unansweredQuestions,
      totalMarks,
      obtainedMarks,
      percentage,
      negativeMarks,
    };

    this.submitted = true;

    if (this.timerId) {
      clearInterval(this.timerId);
    }

    this.router.navigate(['/exam/result'], {
      state: { result },
    });
  }
}
