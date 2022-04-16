import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {
  static numeroDeContas = 0;
  //#saldo = 0; futura forma de criar campos privados

  constructor(cliente, agencia) {
    super(0, cliente, agencia);
    ContaCorrente.numeroDeContas += 1;
  };

  //sobreescrevendo o comportamento do metodo saque
  saque(valor) {
    let taxa = 1.1;
    return this._saque(valor, taxa);//ou super._saque
  };
}
