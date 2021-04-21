import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  mainUrl = 'https://ypri.org/wp-json/wp/v2/';
  items: any[];
  categories: any[];

  constructor(private http: HttpClient) {   }

   public getPosts() {
     return this.http.get(this.mainUrl + 'posts/?_embed');
   }
}
