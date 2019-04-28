import { Component } from "@angular/core";

@Component({
  selector: "dn-sales-volume",
  templateUrl: "./donut-sales-volume.component.html",
  styleUrls: ["./donut-sales-volume.component.scss"]
})
export class DonutSalesVolumeComponent {
  prodTitle: string = "Sales Volume";

  collapse: boolean = true;

  id: string = "sales-volume-accordian";

  sales = [
    {
      chocolateDonuts: 20,
      whiteChocolatedonuts: 15,
      glaceDonuts: 30,
      chocochipDonuts: 40
    }
  ];

}
