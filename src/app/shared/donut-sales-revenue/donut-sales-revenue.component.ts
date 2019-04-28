import { Component } from "@angular/core";

@Component({
  selector: "dn-sales-revenue",
  templateUrl: "./donut-sales-revenue.component.html",
  styleUrls: ["./donut-sales-revenue.component.scss"]
})
export class DonutSalesRevenueComponent {
  prodTitle: string = "Sales Revenue";

  collapse: boolean = true;

  id: string = "sales-revenue-accordian";

  revenue: number = 500;

  netRevenue : string = `Sales of ${this.revenue}$ from selling donuts and drinks.`

}
