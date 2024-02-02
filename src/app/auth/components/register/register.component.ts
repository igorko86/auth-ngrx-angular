import {Component} from '@angular/core'
import {RouterLink} from '@angular/router'
import {FormBuilder, ReactiveFormsModule} from '@angular/forms'
import {Validators} from '@angular/forms'
import {AsyncPipe, KeyValuePipe, NgForOf, NgIf} from '@angular/common'
import {Store} from '@ngrx/store'
import {authActions} from '../../store/actions'
import {RegisterDTO} from '../../types'
import {selectErrors, selectIsSubmitting} from '../../store/reducers'
import {BackendErrorsComponent} from '../../../shared/components/features/backendErrors/backendErrors.component'

@Component({
  selector: 'my-register',
  standalone: true,
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
  imports: [
    RouterLink,
    ReactiveFormsModule,
    NgIf,
    NgForOf,
    AsyncPipe,
    KeyValuePipe,
    BackendErrorsComponent,
  ],
})
export class RegisterComponent {
  formRegister = this.fb.group({
    username: ['', Validators.required],
    email: ['', [Validators.email, Validators.required]],
    password: ['', Validators.required],
    roleId: 1,
  })
  roles = [
    {
      title: 'developer',
      id: 1,
    },
    {
      title: 'qa',
      id: 2,
    },
  ]
  isSubmitted = false
  isSubmitting$ = this.store.select(selectIsSubmitting)
  errors$ = this.store.select(selectErrors)
  constructor(
    private fb: FormBuilder,
    private store: Store,
  ) {}

  onSubmit() {
    this.isSubmitted = true

    const {username, password, email} = this.formRegister.value

    const request = {
      username,
      password,
      email,
    }
    this.store.dispatch(authActions.register({user: request} as RegisterDTO))
  }

  isValidField(fieldName: string) {
    const {invalid, dirty, touched} = this.formRegister.get(fieldName) || {}
    return invalid && (dirty || touched || this.isSubmitted)
  }
}
