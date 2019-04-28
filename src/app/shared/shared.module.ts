import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { NavbarComponent } from "../shared/navbar/navbar.component";
import { AccordianComponent } from "../shared/accordian/accordian.component";
import { DonutProductionComponent } from "./donut-production/donut-production.component";
import { DonutExpensecomponent } from "./donut-expense/donut-expense.component";

// ngx translate imports..................................
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

@NgModule({
  imports: [
    CommonModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  declarations: [
    NavbarComponent,
    AccordianComponent,
    DonutProductionComponent,
    DonutExpensecomponent
  ],
  exports: [
    TranslateModule,
    NavbarComponent,
    AccordianComponent,
    DonutProductionComponent,
    DonutExpensecomponent
  ]
})
export class SharedModule {}
