/**
 * ser auth significa ter o método autenticar "senha"
 * Ducky Typing: não interessa o tipo, interessa se ele tem a propriedade q queremos
 */

export class SistemaAuth {
  static login(auth, senha) {
    if (SistemaAuth.autenticavel(auth)) {
      return auth.autenticar(senha);
    }
    return false;
  }

  static autenticavel(auth) {
    return "autenticar" in auth && auth.autenticar instanceof Function;
  }
}