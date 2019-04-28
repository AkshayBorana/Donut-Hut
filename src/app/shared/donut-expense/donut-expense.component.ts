import { Component } from "@angular/core";

@Component({
  selector: "dn-expense",
  templateUrl: "./donut-expense.component.html",
  styleUrls: ["./donut-expense.component.html"]
})
export class DonutExpensecomponent {
  prodTitle: string = "Expenses";

  collapse: boolean = true;

  id: string = "expenses-accordian";

  salaries = [
    {
      baker: "15$ /hr",
      cashier: "17$ /hr",
      manager: "20$ /hr"
    }
  ];

  materials = [
    {
      flour: "5$ /kg",
      sugar: "3$ /kg",
      chocolate: "$ /kg",
      nuts: "1$ /kg",
      whiteChocolate: "4 /kg"
    }
  ];

  facilities = [
    {
      electricityBill: "150$ /mo",
      maintenanceBill: "50$ /mo",
      DeliverCharge: "100$ /mo"
    }
  ];
}
