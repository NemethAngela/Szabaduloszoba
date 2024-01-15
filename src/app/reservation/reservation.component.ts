import { Component } from '@angular/core';
import { BaseService } from '../base.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent {
  reservations:any;
  
  constructor(private base:BaseService){}

  ngOnInit(): void {
    this.base.loadReservations();
    this.base.getReservations().subscribe(
      (res) => {
        this.reservations = res;
        this.sortByDate();
      }
    );
  }

  sortByDate() {
    this.reservations.sort((a: any, b: any) => {
      return new Date(b.datum).getTime() - new Date(a.datum).getTime();
    });
  }
}
