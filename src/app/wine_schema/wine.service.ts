import { Injectable } from '@angular/core';
import { Wine } from './wine.model';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class WinesService {
  private wines: Wine[] = [];
  private redWines: Wine[] = [];
  private whiteWines: Wine[] = [];
  private sparklingWines: Wine[] = [];
  private winesUpdated = new Subject<Wine[]>();
  private redWinesUpdated = new Subject<Wine[]>();
  private whiteWinesUpdated = new Subject<Wine[]>();
  private sparklingWinesUpdated = new Subject<Wine[]>();

  constructor(private http: HttpClient) {}

  getWines() {
    this.http.get<{message: String, wines: Wine[]}>('http://localhost:3000/api/posts')
      .subscribe((wineData) => {
        this.wines = wineData.wines;
        this.winesUpdated.next([...this.wines])
      });
  }

  getRedWines() {
    this.http.get<{message: String, wines: Wine[]}>('http://localhost:3000/api/posts/red')
      .subscribe((wineData) => {
        this.redWines = wineData.wines;
        this.redWinesUpdated.next([...this.redWines])
      });
  }

  getWhiteWines() {
    this.http.get<{message: String, wines: Wine[]}>('http://localhost:3000/api/posts/white')
      .subscribe((wineData) => {
        this.whiteWines = wineData.wines;
        this.whiteWinesUpdated.next([...this.whiteWines])
      });
  }

  getSparklingWines() {
    this.http.get<{message: String, wines: Wine[]}>('http://localhost:3000/api/posts/sparkling')
      .subscribe((wineData) => {
        this.sparklingWines = wineData.wines;
        this.sparklingWinesUpdated.next([...this.sparklingWines])
      });
  }

  getWineUpdateListener() {
    return this.winesUpdated.asObservable();
  }

  getRedWineUpdateListener() {
    return this.redWinesUpdated.asObservable();
  }

  getWhiteWineUpdateListener() {
    return this.whiteWinesUpdated.asObservable();
  }

  getSparklingWineUpdateListener() {
    return this.sparklingWinesUpdated.asObservable();
  }

  addPost(name: string, type: string, rating: number, year: number, price: number, notes: string, variety: string, alcPercent: number, terroir: string, picName: string) {
    const post: Wine = {
      name: name,
      type: type,
      rating: rating,
      year: year,
      price: price,
      notes: notes,
      variety: variety,
      alcPercent: alcPercent,
      terroir: terroir,
      picName: picName };
    this.http
      .post<{ message: string }>("http://localhost:3000/api/posts", post)
      .subscribe(responseData => {
        console.log(responseData.message);
        this.wines.push(post);
        //this.winesUpdated.next([...this.wines]);
      });
  }
}
