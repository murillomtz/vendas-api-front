import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'telefone'
})
export class TelefonePipe implements PipeTransform {
  transform(value: any): any {
    // Remova todos os caracteres não numéricos do valor fornecido
    const cleanedValue = value.replace(/\D/g, '');

    // Verifique se o valor possui 10 dígitos (formato padrão de telefone)
    if (cleanedValue.length === 11) {
      const areaCode = cleanedValue.slice(0, 2);
      const firstPart = cleanedValue.slice(2, 7);
      const secondPart = cleanedValue.slice(7, 11);

      return `(${areaCode}) ${firstPart}-${secondPart}`;
    }

    // Caso contrário, retorne o valor original
    return value;
  }
}
