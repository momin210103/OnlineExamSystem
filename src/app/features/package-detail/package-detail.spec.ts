// package-detail.component.ts
import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { getPackage, PackageExam } from './../../data/package';

@Component({
  selector: 'app-package-detail',
  standalone: true,
  imports: [RouterLink, MatCardModule, MatIconModule, MatButtonModule],
  templateUrl: './package-detail.html',
  styleUrl: './package-detail.css',
})
export class PackageDetailComponent {
  private route = inject(ActivatedRoute);
  private params = toSignal(this.route.paramMap);

  // TODO: পরে auth/payment থেকে আসবে
  purchased = signal(false);

  pkg = computed(() => {
    const p = this.params();
    return p ? getPackage(p.get('category')!, p.get('packageId')!) : undefined;
  });

  totalMarks = computed(() => this.pkg()?.exams.reduce((sum, e) => sum + e.marks, 0) ?? 0);

  canStart(exam: PackageExam): boolean {
    const p = this.pkg();
    return !!p && (p.price === 0 || exam.isFree || this.purchased());
  }

  buy() {
    // এখন শুধু ডেমো। পরে payment গেটওয়ে যুক্ত হবে
    this.purchased.set(true);
  }
}
