import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { StoreDetailComponent } from "./store-detail/store-detail.component";


const routes: Routes = [

  {
    path: "store/mad-over-donuts",
    component: StoreDetailComponent
  },

];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutes {}
