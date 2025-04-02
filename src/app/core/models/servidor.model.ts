export interface Servidor {
  id: number;
  nome: string;
  telefone: string;
  email: string;
  orgao: string;
  lotacao: string;
  sala: string;
  status: 'ativo' | 'Inativo';
}
