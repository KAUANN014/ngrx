import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { ServidorService } from '../service/servidor.service';
import { map, catchError, mergeMap } from 'rxjs/operators';
import * as ServidorActions from '../actions/servidor.actions';
import { of } from 'rxjs';

@Injectable()
export class ServidorEffects {
  constructor(
    private actions$: Actions,
    private servidorService: ServidorService
  ) {}

  loadServidores$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ServidorActions.loadServidores),
      mergeMap(() =>
        this.servidorService.GetServidores().pipe(
          map((servidores) =>
            ServidorActions.loadServidoresSucess({ servidores })
          ),
          catchError((error) =>
            of(ServidorActions.servidoresFailure({ error }))
          )
        )
      )
    ),
    { functional: true }
  );


}
