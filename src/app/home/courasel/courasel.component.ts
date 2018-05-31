import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courasel',
  templateUrl: './courasel.component.html',
  styleUrls: ['./courasel.component.css']
})
export class CouraselComponent implements OnInit {
 items:Array<any>=[];
  constructor() {
    this.items=[
      {name:'../../../assets/slide1.jpg'},
      {name:'../../../assets/slide2.jpg'},
      {name:'../../../assets/slide3.jpg'},
      {name:'../../../assets/slide4.jpg'}
     
      
    ]
   }

  ngOnInit() {
  }

}
