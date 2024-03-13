import { HttpClient } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';

import { UserItem, UsersResponse } from '@interfaces/users-response.interface';
import { User } from '@interfaces/user.interface';

import { environment as env } from '@/environments/environment';

interface State {
  users: UserItem[];
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
    this.http
      .get<UsersResponse>(env.apiUrl, {
        params: {
          wsfunction: 'local_weknow_get_users_list',
        },
      })
      .subscribe((res) => {
        console.log('res', res);

        this.#state.set({
          loading: false,
          users: res.users,
        });
      });
  }

  getUserById(id: string) {
    return this.http.get<User>(env.apiUrl, {
      params: {
        wsfunction: 'local_weknow_get_user_details',
        userid: id,
      },
    });
  }
}
