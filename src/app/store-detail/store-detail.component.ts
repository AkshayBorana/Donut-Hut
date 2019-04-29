import { Component } from "@angular/core";


 @Component({
    selector: "dn-store-details",
    templateUrl: "./store-detail.component.html",
    styleUrls: ["./store-detail.component.scss"]
})


 export class StoreDetailComponent {

     storeInformation = [
    {
        name: "Mad Over Doughnuts",
        image: "/assets/images/doughnut-wall.png",
        address: "1846 Saint-Catherine St W",
        phone: "514737111"
    }
    ]
}