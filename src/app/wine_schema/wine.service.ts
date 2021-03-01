import { Injectable } from '@angular/core';
import { Wine } from './wine.model';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class WinesService {
  private wines: Wine[] = [];
  private winesUpdated = new Subject<Wine[]>();

  constructor(private http: HttpClient) {}

  getWines() {
    this.http.get<{message: String, wines: Wine[]}>('http://localhost:3000/api/posts')
      .subscribe((wineData) => {
        this.wines = wineData.wines;
        this.winesUpdated.next([...this.wines])
      });
  }

  getWineUpdateListener() {
    return this.winesUpdated.asObservable();
  }
}
