import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  private url = 'http://localhost:3000/foglalasok';
  private reservations = new Subject()

  constructor(private http: HttpClient) {}

  loadReservations() {
    this.http.get(this.url).subscribe(
      (res) => this.reservations.next(res),
      (error) => console.error('Hiba a foglalások listázásakor:', error)
    );
  }

  getReservations() {
    return this.reservations;
  }

  postReservation(reservation:any) {
    this.http.post(this.url, reservation).subscribe(
      {
        next:()=>this.loadReservations(),
        error:(err)=>console.log("HIba a foglalás felvételénél: ", err)
      }
    )
  }
}
