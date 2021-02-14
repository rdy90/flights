import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Ticket} from '../../models';
import {TICKETS} from '../../../mock-data';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor() {
  }

  public getTickets(): Observable<Ticket[]> {
    return of(TICKETS);
  }
}
