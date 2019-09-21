import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private baseApiUrl = '';

  constructor(private http: HttpClient) {}

  get baseUrl(): string {
    return this.baseApiUrl;
  }

  loadConfig() {
    return forkJoin(this.getBaseUrl());
  }

  getBaseUrl() {
    return this.http
      .get<{ baseUrl: string }>('/assets/config.json')
      .pipe(map(config => config.baseUrl))
      .pipe(tap(url => (this.baseApiUrl = url)));
  }
}
