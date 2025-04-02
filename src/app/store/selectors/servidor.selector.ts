import { createSelector, createFeatureSelector } from "@ngrx/store";
import { ServidorState } from "../../core/view-model/servidor.state";

export const selectServidoresState = createFeatureSelector<ServidorState>('servidores');

export const selectAllServidores = createSelector(
  selectServidoresState,
  (state: ServidorState) => state.servidores
);

export const ServidoresError = createSelector(
  selectServidoresState,
  (state: ServidorState) => state.error
);
