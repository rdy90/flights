import {Component, Input, OnInit} from '@angular/core';
import {Ticket} from '../models';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.scss']
})
export class TicketListComponent implements OnInit {

  @Input()
  public tickets!: Ticket[];

  constructor() {
  }

  ngOnInit(): void {
  }

}
