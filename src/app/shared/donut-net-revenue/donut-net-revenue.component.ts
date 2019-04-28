import { Component } from "@angular/core";

@Component({
  selector: "dn-net-revenue",
  templateUrl: "./donut-net-revenue.component.html",
  styleUrls: ["./donut-net-revenue.component.scss"]
})
export class DonutNetRevenueComponent {
  prodTitle: string = "Net Revenue";

  collapse: boolean = true;

  id: string = "net-revenue-accordian";

  totalIncome: number = 120000;

  netRevenue : string = `Last years Net Revenue : ${this.totalIncome}$`

}
