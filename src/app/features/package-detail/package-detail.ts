import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { UpperCasePipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { switchMap } from 'rxjs';
import { PackageService } from '../../services/package';
import { PackageExam } from '../../models/package';

@Component({
  selector: 'app-package-detail',
  standalone: true,
  imports: [RouterLink, UpperCasePipe, MatCardModule, MatIconModule, MatButtonModule],
  templateUrl: './package-detail.html',
  styleUrl: './package-detail.css',
})
export class PackageDetail {
  private route = inject(ActivatedRoute);
  private packageService = inject(PackageService);

  purchased = signal(false);

  pkg = toSignal(
    this.route.paramMap.pipe(
      switchMap((params) =>
        this.packageService.getPackage(params.get('category')!, params.get('packageId')!),
      ),
    ),
  );

  totalMarks = computed(() => this.pkg()?.exams.reduce((sum, e) => sum + e.marks, 0) ?? 0);

  canStart(exam: PackageExam): boolean {
    const p = this.pkg();
    return !!p && (p.price === 0 || exam.isFree || this.purchased());
  }

  buy() {
    this.purchased.set(true);
  }
}
