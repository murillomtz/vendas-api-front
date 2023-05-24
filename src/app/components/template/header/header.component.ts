import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,OnChanges {

  paginaAtual: any = "";
  constructor() { }


  ngOnChanges(): void {
    this.isCheckedComponente();
  }

  ngOnInit(): void {
    this.isCheckedComponente();
  }

  isCheckedComponente() {
    this.paginaAtual = sessionStorage.getItem("componenteAtual");
  }

}
