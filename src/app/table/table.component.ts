import { Component, Input, OnInit, Output } from '@angular/core';
import { Book } from '../model/book';

@Component({
  selector: 'spa-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showTableVar: boolean = false;
  _filteredBooks: Book[] = [];
  
    typesOfBooks: Book[] = [
      {name: '', id: 1, category: 'Novel', price: 99.99},
      {name: '', id: 2, category: 'Horror', price: 99.99},
      {name: '', id: 3, category: 'Action', price: 99.99},
    ];

    allBooks: Book[] = [
    {name: 'Para todos os garotos que já amei', id: 1, category: 'Novel', price: 99.99},
    {name: 'Agora e para sempre, Lara Jean', id: 1, category: 'Novel', price: 99.99},
    {name: 'PS. Ainda amo você', id: 1, category: 'Novel', price: 99.99},
    {name: 'IT: a coisa', id: 2, category: 'Horror', price: 99.99},
    {name: 'A profecia', id: 2, category: 'Horror', price: 99.99},
    {name: 'Percy Jackson: e o ladrão de raios', id: 3, category: 'Action', price: 99.99},
    {name: 'Harry Potter', id: 3, category: 'Action', price: 99.99},
  ];

  displayedColumns = [ 'id', 'name', 'price', 'category']

  showTable(value: string) {
    this._filteredBooks = this.allBooks
    .filter((books: Book) => books.category.toLocaleLowerCase()
    .indexOf(value.toLocaleLowerCase()) > -1); 
    this.showTableVar = true;
  }

}
