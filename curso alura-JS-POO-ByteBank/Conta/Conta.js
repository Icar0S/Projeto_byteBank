//CLASSE ABSTRATA (PODE APENAS SER HERDADA)
export class Conta {
  constructor(saldoInit, cliente, agencia) {
    if (this.constructor == Conta) {
      throw new Error("Instância não deve ser do tipo conta, pois é uma classe Abstrata!");
    }

    this._saldo = saldoInit;
    this._cliente = cliente;
    this._agencia = agencia;
  }

  get saldo() {
    return this._saldo;
  };

  set cliente(novoValor) {
    if (novoValor instanceof Cliente) {
      this._cliente = novoValor;
    }
  };
  get cliente() {
    return this._cliente;
  };

  saque(valor) {
    throw new Error("Método sacar é abstrato.");
  };

  _saque(valor, taxa) {
    const valorSacado = taxa * valor;
    if (this._saldo >= valorSacado) {
      this._saldo -= valorSacado;
      return valorSacado;
    } else { console.log("Valor de saque indisponível") }

    return 0;
  };

  deposito(valor) {
    if (valor <= 0) {
      console.log("Depósito bloqueado")
      return;
    };
    this._saldo += valor;
  };

  transferencia(valor, conta) {
    const valorSacado = this.saque(valor);
    conta.deposito(valorSacado);
  };
};