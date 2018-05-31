import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drug',
  templateUrl: './drug.component.html',
  styleUrls: ['./drug.component.css']
})
export class DrugComponent implements OnInit {
   drug:{id:number,name:string,desc:string,image:string};
  constructor() { }

  ngOnInit() {

  }

}
