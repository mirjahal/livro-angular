import { Injectable } from '@angular/core';

@Injectable()
export class PessoaServiceService {

  nomePessoas: string[] = ['João',	'Maria',	'Angular	2',	'Erasmo'];

  constructor() { }

  getPessoas():	string[]	{
    return this.nomePessoas;
	}

  setPessoa(nome: string): void {
    this.nomePessoas.push(nome);
  }

}
