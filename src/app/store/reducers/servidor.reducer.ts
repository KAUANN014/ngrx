import { createReducer, on } from '@ngrx/store';
import * as ServidorActions from '../actions/servidor.actions';
import { ServidorState } from '../../core/view-model/servidor.state';
import { Servidor } from '../../core/models/servidor.model';

export const initialState: ServidorState = {
  servidores: [],
  error: null,
};

const loadServidoresSuccess = (state: ServidorState, { servidores }: { servidores: Servidor[] }): ServidorState => ({
  ...state,
  servidores,
});

const servidorFailure = (state: ServidorState, { error }: { error: any }): ServidorState => ({
  ...state,
  error,
});

export const servidorReducer = createReducer(
  initialState,
  on(ServidorActions.loadServidoresSucess, loadServidoresSuccess),
  on(ServidorActions.servidoresFailure, servidorFailure)
);
