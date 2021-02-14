export interface Ticket {
  price: number;
  // Код авиакомпании (iata)
  carrier: string;
  // Массив перелётов.
  // segments: [
  //   // туда
  //   {
  //     // Код города откуда (iata)
  //     origin: string
  //     // Код города куда (iata)
  //     destination: string
  //     // Дата и время вылета
  //     date: string
  //     // Массив кодов (iata) городов с пересадками
  //     stops: string[]
  //     // Общее время перелёта в минутах
  //     duration: number
  //   },
  //   // обратно
  //   {
  //     origin: string
  //     destination: string
  //     date: string
  //     stops: string[]
  //     duration: number
  //   }
  // ];
}
