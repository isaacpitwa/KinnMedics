import { Component, OnInit } from '@angular/core';
import{DrugsComponent} from '../phamarcy/drugs/drugs.component'
import { forEach } from '@angular/router/src/utils/collection';
@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
 private count:number=0;
 private name:string;
 private amount:number=0;
 private itemcost:number=0;
  total:number=0;
 item:{name:string,itemCost:number,Amount:number};
 bought:Array<any>=[];
  constructor() { 
   this.bought=[
     {name:'Panadol',units:250,amount:500},
     {name:'Panadol',units:250,amount:500},
     {name:'Panadol',units:250,amount:545},
     {name:'Panadol',units:250,amount:500}
    ]
  }
      
  ngOnInit() {
  }
  calcTotal(){
    
  }
  getTotal(){
   var num=0;
   for(var i=0;i<this.bought.length;i++){
   this.total+= this.bought[i];
   }
       return this.total;
  }
  buy(){
   
  }
   
}
