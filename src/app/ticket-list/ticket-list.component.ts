import {Component, OnInit} from '@angular/core';
import {Ticket} from '../models';
import {TicketService} from './services/ticket.service';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.scss']
})
export class TicketListComponent implements OnInit {

  public tickets: Ticket[] = [];

  constructor(private ticketService: TicketService) {
  }

  private getTickets(): void {
    this.ticketService.getTickets()
      .subscribe(tickets => this.tickets = tickets);
  }

  ngOnInit(): void {
    this.getTickets();
  }

}
