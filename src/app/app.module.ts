import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { TicketComponent } from './ticket-list/ticket/ticket.component';
import { TabsComponent } from './tabs/tabs.component';
import { FilterComponent } from './filter/filter.component';
import {GetPricePipe} from './ticket-list/ticket/ticket.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TicketListComponent,
    TicketComponent,
    TabsComponent,
    FilterComponent,
    GetPricePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
