import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
   doctors;
  constructor() { 
    this.doctors=[
      {'name':'Isaac Pitwa','category':'Dentist','image':'../../assets/dr.jfif','location':'Kawaala','E-mail':'isaacpitwa256@gmail.com'},
      {'name':'Kawanja Samuel','category':'Therapist','image':'../../assets/dr.jfif','location':'Bwaise','E-mail':'isaacpitwa256@gmail.com'},
      {'name':'Nansamba Sandra','category':'Optician','image':'../../assets/dr.jfif','location':'Nanasana','E-mail':'isaacpitwa256@gmail.com'},
      {'name':'Sergio Ramos','category':'Exercise','image':'../../assets/dr.jfif','location':'Banda','E-mail':'isaacpitwa256@gmail.com'},
      {'name':'Sergio Ramos','category':'Therapist','image':'../../assets/dr.jfif','location':'Banda','E-mail':'isaacpitwa256@gmail.com'},
      {'name':'Sergio Ramos','category':'Dentist','image':'../../assets/dr.jfif','location':'Banda','E-mail':'isaacpitwa256@gmail.com'},
      {'name':'Sergio Ramos','category':'Optician','image':'../../assets/dr.jfif','location':'Banda','E-mail':'isaacpitwa256@gmail.com'},
      {'name':'Isaac Pitwa','category':'Dentist','image':'../../assets/dr.jfif','location':'Kawaala','E-mail':'isaacpitwa256@gmail.com'},
      {'name':'Kawanja Samuel','category':'Therapist','image':'../../assets/dr.jfif','location':'Bwaise','E-mail':'isaacpitwa256@gmail.com'},
      {'name':'Nansamba Sandra','category':'Optician','image':'../../assets/dr.jfif','location':'Nanasana','E-mail':'isaacpitwa256@gmail.com'}
           
    ]
  }

  ngOnInit() {
  }
  doctorComment(category){
      switch (category)
      {
        case 'Dentist':
        return 'This is the Senior doctor of the teeth';
       // break;
        case 'Therapist':
        return 'This is the Senior doctor of the Behavior and social Mindset  ';
//break;
        case 'Optician':
        return 'This is the  Senior doctor of the Eyes ';
       // break;
        case 'Exercise':
        return 'This is the Senior doctor of the Wrestling of Mo Saalah in Champ Final 2018';
       // break;
        default:
        return 'The Senior Doctor ';
        //break;
      }
  }
}
