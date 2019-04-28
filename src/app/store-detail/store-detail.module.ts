import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StoreDetailComponent } from "./store-detail.component";
import { SharedModule } from "../shared/shared.module"


@NgModule({
    imports: [
      CommonModule,
      SharedModule
    ],
    declarations: [StoreDetailComponent],
    exports: [StoreDetailComponent]
  })
  export class StoreDetailModule {}