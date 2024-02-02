import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {RegisterDTO} from '../types'
import {map, Observable} from 'rxjs'
import {IUser} from '../../shared/types/user.interface'
import {IAuthResponse} from '../../shared/types/authResponse.interface'
import {environment} from '../../../environments/environment'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  register(data: RegisterDTO): Observable<IUser> {
    const url = `${environment.apiUrl}/users`

    return this.http.post<IAuthResponse>(url, data).pipe(map((res) => res.user))
  }
}
