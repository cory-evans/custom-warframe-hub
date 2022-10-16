import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, interval, map, take, concatMap, timer } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WarframeApiService {
  constructor(private http: HttpClient) {}

  private get<T>(url: string) {
    while (url.startsWith('/')) {
      url = url.slice(1);
    }
    return this.http.get<T>(`https://api.warframestat.us/${url}`);
  }

  worldState(intervalSeconds: number = 60) {
    return timer(0, intervalSeconds * 1000).pipe(
      concatMap((x) => {
        return this.get<WarframeApi.WorldState>('pc');
      })
    );
  }
}
