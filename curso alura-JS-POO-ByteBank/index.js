/*                        CRIANDO UM SISTEMA BANCARIO
const cliente1Nome = "Icaro Santos";
const cliente1CPF = 123123123 - 99;
const cliente1Agencia = 1003;
const cliente1Saldo = 0;
             ESTRUTURA REPETITIVA PARA 'N' CLIENTES, PRECISA DE CLASSES
const cliente2Nome = "Gabriela Oliveira";
const cliente2CPF = 223123123 - 12;
const cliente2Agencia = 2003;
const cliente2Saldo = 10;*/
import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./Conta/ContaCorrente.js";
import { ContaPoupanca } from "./Conta/ContaPoupanca.js";
import { ContaSalario } from "./Conta/ContaSalario.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { SistemaAuth } from "./SistemaAuth.js";

const cliente1 = new Cliente("Icaro Santos", 12345678999);
const cliente2 = new Cliente("Gabriela Oliveira", 22312312312);
const cliente3 = new Cliente("Matheus Lima", 22234543211);
const cliente4 = new Cliente("Gabriel Simão", 22308880810);

const ContaI = new ContaCorrente(cliente1, 1001);
ContaI.deposito(500);
ContaI.saque(100);
const contaPoupanca = new ContaPoupanca(500, cliente1, 1001);
contaPoupanca.deposito(50)
contaPoupanca.saque(100);
const contaSalario = new ContaSalario(cliente1);
contaSalario.deposito(2000);

const conta2 = new ContaCorrente(0, cliente2, 1005);
conta2.deposito(235);
const conta3 = new ContaCorrente(0, cliente3, 1002);
conta3.deposito(210);
const conta4 = new ContaCorrente(0, cliente4, 1001);
conta4.deposito(100);
ContaI.transferencia(70, conta2);

console.log("\nTotal de Contas Abertas: ", ContaCorrente.numeroDeContas, "\n");
console.log(contaPoupanca);
console.log(ContaI);
console.log(contaSalario);

const diretor = new Diretor("Icaro", 10000, 12345678900);
diretor.cadastroSenha("123456");
const gerente = new Gerente("Santos", 5000, 1234567777);
gerente.cadastroSenha("123121");
const cliente = new Cliente("Icaro Santos", 12345678999, "777777");

const Diretorlogado = SistemaAuth.login(diretor, "123456");//  POLIMORFISMO
const Gerentelogado = SistemaAuth.login(gerente, "123121");
const clientelogado = SistemaAuth.login(cliente, "777777");

console.log(Diretorlogado, Gerentelogado, clientelogado);
