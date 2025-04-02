import { createAction, props } from '@ngrx/store';
import { Servidor } from '../../core/models/servidor.model';


export const loadServidores = createAction('[Servidor] LoadServidores')
export const loadServidoresSucess = createAction('[Servidor] Load Servidores Sucess', props<{servidores: Servidor[]}>())

export const servidoresFailure = createAction('[Servidor] Servidores Failure', props <{error: string}>())


