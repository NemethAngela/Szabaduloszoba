import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservationComponent } from './reservation/reservation.component';
import { NewReservationComponent } from './new-reservation/new-reservation.component';

const routes: Routes = [
  { path: 'foglalasok', component: ReservationComponent },
  { path: 'ujfoglalas', component: NewReservationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
