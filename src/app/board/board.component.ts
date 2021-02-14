import {Component, OnInit} from '@angular/core';
import {Ticket} from '../models';

const TICKETS = [
  {
    price: 44187,
    carrier: 'SU',
    segments: [
      {
        origin: 'MOW',
        destination: 'HKT',
        date: '2021-02-23T06:49:00.000Z',
        stops: [
          'SHA',
          'SIN',
          'BKK'
        ],
        duration: 1407
      },
      {
        origin: 'HKT',
        destination: 'MOW',
        date: '2021-03-15T01:22:00.000Z',
        stops: [
          'HKG',
          'SHA',
          'BKK'
        ],
        duration: 1299
      }
    ]
  },
  {
    price: 78578,
    carrier: 'MH',
    segments: [
      {
        origin: 'MOW',
        destination: 'HKT',
        date: '2021-02-22T23:58:00.000Z',
        stops: [
          'SIN',
          'IST',
          'DXB'
        ],
        duration: 603
      },
      {
        origin: 'HKT',
        destination: 'MOW',
        date: '2021-03-15T11:04:00.000Z',
        stops: [
          'IST'
        ],
        duration: 1533
      }
    ]
  },
  {
    price: 72070,
    carrier: 'TG',
    segments: [
      {
        origin: 'MOW',
        destination: 'HKT',
        date: '2021-02-23T00:18:00.000Z',
        stops: [
          'AUH',
          'HKG'
        ],
        duration: 878
      },
      {
        origin: 'HKT',
        destination: 'MOW',
        date: '2021-03-14T21:17:00.000Z',
        stops: [
          'BKK',
          'KUL'
        ],
        duration: 1834
      }
    ]
  },
  {
    price: 15832,
    carrier: 'EK',
    segments: [
      {
        origin: 'MOW',
        destination: 'HKT',
        date: '2021-02-23T10:14:00.000Z',
        stops: [
          'BKK'
        ],
        duration: 1859
      },
      {
        origin: 'HKT',
        destination: 'MOW',
        date: '2021-03-15T15:26:00.000Z',
        stops: [
          'SHA',
          'KUL'
        ],
        duration: 1178
      }
    ]
  },
  {
    price: 33451,
    carrier: 'MH',
    segments: [
      {
        origin: 'MOW',
        destination: 'HKT',
        date: '2021-02-23T11:56:00.000Z',
        stops: [
          'AUH',
          'IST'
        ],
        duration: 1591
      },
      {
        origin: 'HKT',
        destination: 'MOW',
        date: '2021-03-15T16:34:00.000Z',
        stops: [],
        duration: 992
      }
    ]
  },

];

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  public tickets: Ticket[] = BoardComponent.getTickets();

  constructor() {
  }

  ngOnInit(): void {
  }

  static getTickets(): Ticket[] {
    const Tickets: Ticket[] = [];
    for (const item of TICKETS) {
      Tickets.push({
        price: item.price,
        carrier: item.carrier,
      });
    }
    return Tickets;
  }

}
