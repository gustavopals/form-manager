import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  avatar = 'https://avatars.githubusercontent.com/u/70023553?v=4';

  contact = {
    name: 'Gustavo Pals',
    email: 'gustavoandrepals@gmail.com',
    phone: '42999365350'
  };

  callContact(phone: string) {
    window.open(`tel:${phone}`, '_self');
  }

  sendContact(email: string) {
    window.open(`mailto:${email}`, '_self');
  }

  formatPhoneNumber(phone: string) {
    return `(${phone.substring(0, 2)}) ${phone.substring(2, 7)}-${phone.substring(7)}`;
  }
}
