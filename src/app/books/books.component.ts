import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent { 
  // newBookName='';
  newAuthorName='';
  newBookImagePath='';
  newDesc='';

  @Output() bookAdded= new EventEmitter<{      
    bookName: string,
    authorName: string,
    bookImagePath: string,
    desc: string
  }>();

  onBookAdd(bookNameInput: HTMLInputElement){
    this.bookAdded.emit({
      bookName: bookNameInput.value,
      authorName: this.newAuthorName,
      bookImagePath: this.newBookImagePath,
      desc: this.newDesc
    });
  }
  // onBookAdd(){
  //   this.bookAdded.emit({
  //     bookName: this.newBookName,
  //     authorName: this.newAuthorName,
  //     bookImagePath: this.newBookImagePath,
  //     desc: this.newDesc
  //   });
  // }
}
