import { Servidor } from "../models/servidor.model";

export interface ServidorState{
  servidores: Servidor[]
  error: string | null;
}
