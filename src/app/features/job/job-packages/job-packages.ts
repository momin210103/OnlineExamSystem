// job-preparation.component.ts
import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { PackageService } from '../../../services/package';

@Component({
  selector: 'app-job-preparation',
  standalone: true,
  imports: [RouterLink, MatCardModule, MatIconModule, MatButtonModule],
  templateUrl: './job-packages.html',
  styleUrl: './job-packages.css',
})
export class JobPackages {
  private packageService = inject(PackageService);

  packages = toSignal(this.packageService.getByCategory('job-preparation'), {
    initialValue: [],
  });
}
