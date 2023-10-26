import { Component } from '@angular/core';
import { PoMenuItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent {
  logo = 'assets/images/logo.png'
  readonly menus: Array<PoMenuItem> = [
    { label: 'Home', shortLabel: 'Home', link: '/', icon: 'po-icon-home' },
    {
      label: 'Forms', shortLabel: 'Forms', icon: 'po-icon-edit', subItems: [
        { label: 'Form Designer', shortLabel: 'Forms', link: '/form-designer', icon: 'po-icon-edit' },
      ]
    },
  ];

  private onClick() {
    alert('Clicked in menu item')
  }
}
