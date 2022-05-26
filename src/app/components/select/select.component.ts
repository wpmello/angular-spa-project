import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Shirt } from 'src/app/model/shirt';
import { ShirtService } from 'src/app/service/table.service';

@Component({
  selector: 'spa-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  modelsShirt: Shirt[] = [];
  value!: string;
  @Output() clickEmit = new EventEmitter;

  constructor(private shirtService: ShirtService) { }

  ngOnInit(): void {
    this. getModels();
  }

  getModels() {
    this.shirtService.getModelsShirt().subscribe(resp => {
      this.modelsShirt = resp;
    })
  }

  getClickShirtModel(value: string) {
    this.clickEmit.emit(this.value = value);
    console.log(value);
  }
}
