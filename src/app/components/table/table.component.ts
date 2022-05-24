import { Component, Input, OnInit, Output } from '@angular/core';
import { ShirtService } from 'src/app/service/table.service';
import { Shirt } from '../../model/shirt';

@Component({
  selector: 'spa-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {
  
  constructor(private shirtService: ShirtService) { }
  
  ngOnInit(): void {
    this.getBooks();
    this.getModels();
  }
  
  showTableVar: boolean = false;
  modelsShirt: Shirt[] = [];
  _filteredBooks: Shirt[] = [];
  allBooks: Shirt[] = [];

  displayedColumns = [ 'id', 'brand', 'quantityMax', 'quantityInStock', 'model']

  getBooks() {
    this.shirtService.getBooks().subscribe(resp => {
      this.allBooks = resp;
      this._filteredBooks = this.allBooks;
    })
  }

  getModels() {
    this.shirtService.getModelsShirt().subscribe(resp => {
      this.modelsShirt = resp;
    })
  }

  showTable(value: string) {
    this._filteredBooks = this.allBooks
    .filter((books: Shirt) => books.model.toLocaleLowerCase()
    .indexOf(value.toLocaleLowerCase()) > -1); 
    this.showTableVar = true;
  }

}
