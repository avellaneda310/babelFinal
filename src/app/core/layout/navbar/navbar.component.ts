import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  items: Array<{links: string, title: string}> =[
    {links: '/history', title: 'Historia'},
    {links: '/team', title: 'Equipo'},
    {links: '/we', title: 'Nosotros'},
    {links: '/account/contacto', title: 'Contacto'},
    {links: '/account/login', title: 'Clientes'},
    {links: '/account/register', title: 'Registrarse'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
