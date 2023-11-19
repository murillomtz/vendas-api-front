import { Component, OnInit } from '@angular/core';
import { PedidoService } from 'src/app/components/service/pedido.service';

@Component({
  selector: 'app-pedidos-tabela-detalhes',
  templateUrl: './pedidos-tabela-detalhes.component.html',
  styleUrls: ['./pedidos-tabela-detalhes.component.css']
})
export class PedidosTabelaDetalhesComponent implements OnInit {

  constructor(private service: PedidoService) { }

  ngOnInit() {
    this.service.findByidCliente(1).subscribe((data: any) => console.log("Por cliente: ", data))
  }

  cartItems = [
    { name: 'Produto 1', value: 10, quantity: 1 },
    { name: 'Produto 2', value: 20, quantity: 2 }, 
    { name: 'Produto 3', value: 15, quantity: 1 }
  ];

  increaseQuantity(index: number) {
    this.cartItems[index].quantity++;
  }

  decreaseQuantity(index: number) {
    if (this.cartItems[index].quantity > 1) {
      this.cartItems[index].quantity--;
    }
  }

}
