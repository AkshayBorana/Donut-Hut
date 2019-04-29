import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavbarComponent } from "../shared/navbar/navbar.component";
import { AccordianComponent } from "../shared/accordian/accordian.component";
import { DonutProductionComponent } from "./donut-production/donut-production.component";
import { DonutExpensecomponent } from "./donut-expense/donut-expense.component";
import { DonutSalesVolumeComponent } from "./donut-sales-volume/donut-sales-volume.component";
import { DonutSalesRevenueComponent } from "./donut-sales-revenue/donut-sales-revenue.component";
import { DonutNetRevenueComponent } from "./donut-net-revenue/donut-net-revenue.component";
import { DonutEmployeeComponent } from "./donut-employee/donut-employee.component";

@NgModule({
  imports: [CommonModule],
  declarations: [
    NavbarComponent,
    AccordianComponent,
    DonutProductionComponent,
    DonutExpensecomponent,
    DonutSalesVolumeComponent,
    DonutSalesRevenueComponent,
    DonutNetRevenueComponent,
    DonutEmployeeComponent
  ],
  exports: [
    NavbarComponent,
    AccordianComponent,
    DonutProductionComponent,
    DonutExpensecomponent,
    DonutSalesVolumeComponent,
    DonutSalesRevenueComponent,
    DonutNetRevenueComponent,
    DonutEmployeeComponent
  ]
})
export class SharedModule {}
