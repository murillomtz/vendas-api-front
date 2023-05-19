import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  paginaAtual: any = "";
  constructor() { }

  ngOnInit(): void {
    this.isCheckedComponente();
  }

  isCheckedComponente() {
    this.paginaAtual = sessionStorage.getItem("componenteAtual");
  }

}
