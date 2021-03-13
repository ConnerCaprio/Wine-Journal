import { Injectable } from '@angular/core';
import { Wine } from './wine.model';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { environment } from './../../environments/environment';

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

   BACKEND_URL = environment.apiUrl + "/posts/";

  constructor(private http: HttpClient) {}

  getWines() {
    this.http.get<{message: String, wines: Wine[]}>(this.BACKEND_URL)
      .subscribe((wineData) => {
        this.wines = wineData.wines;
        this.winesUpdated.next([...this.wines])
      });
  }

  getRedWines() {
    this.http.get<{message: String, wines: Wine[]}>(this.BACKEND_URL + 'red')
      .subscribe((wineData) => {
        this.redWines = wineData.wines;
        this.redWinesUpdated.next([...this.redWines])
      });
  }

  getWhiteWines() {
    this.http.get<{message: String, wines: Wine[]}>(this.BACKEND_URL + 'white')
      .subscribe((wineData) => {
        this.whiteWines = wineData.wines;
        this.whiteWinesUpdated.next([...this.whiteWines])
      });
  }

  getSparklingWines() {
    this.http.get<{message: String, wines: Wine[]}>(this.BACKEND_URL + 'sparkling')
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

  addPost(name: string, type: string, rating: string, year: string, price: string, notes: string, variety: string, alcPercent: string, terroir: string, picName: string, image: File) {
     /* const post: Wine = {
      name: name,
      type: type,
      rating: rating,
      year: year,
      price: price,
      notes: notes,
      variety: variety,
      alcPercent: alcPercent,
      terroir: terroir,
      picName: picName }; */
      const postData = new FormData();
      if (picName.includes('jpg')) {
        postData.append("name", name);
        postData.append("type", type);
        postData.append("rating", rating);
        postData.append("year", year);
        postData.append("price", price);
        postData.append("notes", notes);
        postData.append("variety", variety);
        postData.append("alcPercent", alcPercent);
        postData.append("terroir", terroir);
        postData.append("picName", picName);
      }
      else {
        postData.append("name", name);
        postData.append("type", type);
        postData.append("rating", rating);
        postData.append("year", year);
        postData.append("price", price);
        postData.append("notes", notes);
        postData.append("variety", variety);
        postData.append("alcPercent", alcPercent);
        postData.append("terroir", terroir);
        postData.append("picName", picName);
        postData.append("image", image, picName);
      }



    this.http
      .post<{ message: string }>(this.BACKEND_URL , postData)
      .subscribe(responseData => {
        const post: Wine = {name: name,
          type: type,
          rating: rating,
          year: year,
          price: price,
          notes: notes,
          variety: variety,
          alcPercent: alcPercent,
          terroir: terroir,
          picName: picName}
        console.log(responseData.message);
        this.wines.push(post);
        //this.winesUpdated.next([...this.wines]);
      });
  }
}
