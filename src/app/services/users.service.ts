import { HttpClient } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import { map } from 'rxjs';

import {
  User,
  UserResponse,
  UsersResponse,
} from '@interfaces/req-response.interface';

import { environment as env } from '@/environments/environment';

interface State {
  users: User[];
  loading: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private http = inject(HttpClient);

  #state = signal<State>({
    loading: true,
    users: [],
  });

  public readonly users = computed(() => this.#state().users);
  public readonly loading = computed(() => this.#state().loading);

  constructor() {
    this.http.get<UsersResponse>(`${env.apiUrl}users`).subscribe((res) => {
      this.#state.set({
        loading: false,
        users: res.data,
      });
    });
  }

  getUserById(id: string) {
    return this.http
      .get<UserResponse>(`${env.apiUrl}users/${id}`)
      .pipe(map((res) => res.data));
  }
}
