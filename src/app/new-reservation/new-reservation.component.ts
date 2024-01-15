import { Component } from '@angular/core';
import { BaseService } from '../base.service';

@Component({
  selector: 'app-new-reservation',
  templateUrl: './new-reservation.component.html',
  styleUrls: ['./new-reservation.component.css']
})
export class NewReservationComponent {
  reservations:any;
  newReservation:any={}
  oszlopok=["datum", "nev", "fo", "cim", "iranyitoszam"]

  constructor(private base: BaseService){}

  ngOnInit(): void {
    this.base.loadReservations();
    this.base.getReservations().subscribe(
      (res) => this.reservations = res
    );
  }

  postReservation(){
    this.base.postReservation(this.newReservation)
    this.newReservation={}
  }
}
