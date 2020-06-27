import { Component } from '@angular/core';
import { ContentService } from '../content.service';
import { Book } from './Book';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent{

  books: Book[];
  bookName: string;

  constructor(
    private contentService: ContentService,
  ) {
    
   }

  consultar(){
    this.contentService
      .getBooks(this.bookName)
      .subscribe(data => {
        console.log(data)
        this.books = data

      })
  }

}
