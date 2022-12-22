import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  bookElements= [{
    BookName: 'Witcher',
    AuthorName: 'Andrzej Sapkowski',
    ImagePath: 'https://pyxis.nymag.com/v1/imgs/6c3/0ba/af83c5129dcdb0b0d89e142efe0e0b8fef-13-the-witcher.rsquare.w700.jpg',
    Description: 'The Witcher is a series of six fantasy novels and 15 short stories written by Polish author Andrzej Sapkowski.'
  }];


  onBookAdded(bookData: {
    bookName: string,
    authorName: string,
    bookImagePath: string,
    desc: string
   }){
    this.bookElements.push({
      BookName: bookData.bookName,
      AuthorName: bookData.authorName,
      ImagePath: bookData.bookImagePath,
      Description: bookData.desc
    });

   }
}
