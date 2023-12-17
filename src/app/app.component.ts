import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { selectPaginationState } from "./pagination/pagination.reducer";
import { IActions } from './base/base.actions';
import { selectBaseState } from './base/base.reducer';
import { first, switchMap, timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngrx-generic';

  users$ = this.store.select(selectPaginationState);
  user$ = this.store.select(selectBaseState);

  data: any;

  constructor(private store: Store) {

  }

  changePage() {
    this.store.dispatch(IActions.getAll(this.data));
    timer(300).pipe(
      switchMap(() => this.users$.pipe(first()))
    ).subscribe(result => {
      console.log(result);
    })
  }

  userDetails() {
    this.store.dispatch(IActions.get(this.data));
    timer(300).pipe(
      switchMap(() => this.user$.pipe(first()))
    ).subscribe(result => {
      console.log(result);
    })
  }
}
