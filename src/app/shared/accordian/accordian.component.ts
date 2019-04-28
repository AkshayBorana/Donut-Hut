import { Component, OnInit, Input } from "@angular/core";

@Component({
    selector: "dn-accordian",
    templateUrl: "./accordian.component.html",
    styleUrls: ["./accordian.component.scss"]
})


export class AccordianComponent implements OnInit{

    id: string;

    @Input() idPrefix: string;

    @Input() isCollapsed: boolean = true;

    @Input() initialCollapse: boolean;

    @Input() title: string;

    ngOnInit(){
        this.id = `${this.idPrefix}-accordian`;
        this.isCollapsed = this.initialCollapse = true;
    }

    updateDom(){
        this.isCollapsed = !this.isCollapsed;
    }
}