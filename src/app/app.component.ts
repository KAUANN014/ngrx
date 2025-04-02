import { Component, OnInit } from '@angular/core';
import * as ServidorAction from '../app/store/actions/servidor.actions';
import { selectAllServidores } from '../app/store/selectors/servidor.selector';
import { Servidor } from './core/models/servidor.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{

  servidores$: Observable<Servidor[]> | undefined;
  title = 'ngrx';

  constructor(private store: Store,){
    this.servidores$ = this.store.select(selectAllServidores);
  }

  ngOnInit(): void {
    this.store.dispatch(ServidorAction.loadServidores());
  }

}
