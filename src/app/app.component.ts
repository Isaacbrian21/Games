import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  title = 'Games';


constructor() { }
menu_icon_variable: boolean = false;
menuVariable: boolean = false;
ngOnInit(): void {
}
openMenu() {
  this.menuVariable =! this.menuVariable;
  this.menu_icon_variable =! this.menu_icon_variable;
}
}