import { Component } from "@angular/core";

@Component({
  selector: "dn-employee",
  templateUrl: "./donut-employee.component.html",
  styleUrls: ["./donut-employee.component.scss"]
})
export class DonutEmployeeComponent {
  prodTitle: string = "Employee Turn Over Rate";

  collapse: boolean = true;

  id: string = "employee-accordian";

  jobLeft: string = `Last year only 2 employees left the job due to personal reasons.`;

  jobHired : string = `Hired 4 employees since the sales increased.`

}
