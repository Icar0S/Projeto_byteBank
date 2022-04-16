import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta {
  constructor(saldoInit, cliente, agencia) {
    super(saldoInit, cliente, agencia);
  }

  saque(valor) {
    const taxa = 1.02;
    return this._saque(valor, taxa);
  }

}