import { Component } from '@angular/core';
import { ArticlesService } from './../services/articles.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  items: any;

  constructor( public article: ArticlesService) {
    this.article
      .getPosts()
      .subscribe(data => { this.items = data; });
      console.log(this.items);
  }

}
