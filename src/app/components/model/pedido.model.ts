import { Produto } from "./produto.model";

export interface Pedido {
  idCliente: number;
  idAtendente?: number;
  dataPedido: number;
  valorTotal: number;
  produtos: Produto[];
}

