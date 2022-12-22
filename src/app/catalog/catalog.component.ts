import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent {
  @Input() element: {BookName:string,AuthorName:string,ImagePath:string,Description:string};
}
