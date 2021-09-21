import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  colors = ['primary', 'secondary', 'tertiary', 'success', 'warning', 'danger', 'dark', 'medium', 'light'];
  activeColor = 'primary';
  constructor() {}

}
