import { Component } from '@angular/core';
import { PoMenuItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent {
  readonly menus: Array<PoMenuItem> = [
    { label: 'Home', link: '/' },
    { label: 'Form Designer', link: '/form-designer' }
  ];

  private onClick() {
    alert('Clicked in menu item')
  }
}
