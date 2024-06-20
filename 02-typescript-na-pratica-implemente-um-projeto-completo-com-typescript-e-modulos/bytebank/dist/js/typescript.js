/* // Tipos primitivos
let valor: number = 3000;
let nome: string = "";
let isPago: boolean = false;
let qualquer: any = "";

qualquer = 22;

// Arrays
const lista: number[] = [];
lista.push(22, 2, 4, 6);

// Tipos personalizados (Type Alias)
type Transacao = {
   tipoTransacao: TipoTransacao;
   data: Date;
   valor: number;
};

// Enum
enum TipoTransacao {
   DEPOSITO = "Depósito",
   TRANSFERENCIA = "Transferência",
   PAGAMENTO_BOLETO = "Pagamento de Boleto",
}

const novaTransacao: Transacao = {
   tipoTransacao: TipoTransacao.DEPOSITO,
   data: new Date(),
   valor: 0,
}; */
