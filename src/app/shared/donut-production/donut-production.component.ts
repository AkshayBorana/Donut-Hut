import { Component } from "@angular/core";

@Component({
  selector: "dn-production",
  templateUrl: "./donut-production.component.html",
  styleUrls: ["./donut-production.component.scss"]
})
export class DonutProductionComponent {
  prodTitle: string = "Production";

  collapse: boolean = true;

  id: string = "production-accordian";

  productions = [
    {
      daily: 20,
      weekly: 200,
      monthly: 1000
    },
  ];
}
