import { Injectable } from '@angular/core';
import { Lista } from '../classes/listas';

@Injectable()
export class ListaDeseosService {
	
	listas: Lista[] = [];

	constructor() {

		let lista1 = new Lista('Compras de supermercado');
		let lista2 = new Lista('Juegos que deseo');
		let lista3 = new Lista('Cosas de la universidad');
		let lista4 = new Lista('Otro elemento mas');

		this.listas.push(lista1);
		this.listas.push(lista2);
		this.listas.push(lista3);
		this.listas.push(lista4);

		console.log("Servicio inicializado");
	}
}