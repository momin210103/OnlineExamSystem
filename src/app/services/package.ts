import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PackageDetail } from '../models/package';
import { PACKAGE_DETAILS } from '../data/package';

@Injectable({ providedIn: 'root' })
export class PackageService {
  getPackage(category: string, id: string): Observable<PackageDetail | undefined> {
    const pkg = PACKAGE_DETAILS.find((p) => p.category === category && p.id === id);
    return of(pkg);
  }

  getByCategory(category: string): Observable<PackageDetail[]> {
    return of(PACKAGE_DETAILS.filter((p) => p.category === category));
  }
}
