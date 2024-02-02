import {Component, Input, OnInit} from '@angular/core'
import {IBackendErrors} from '../../../types/backendErrors.inreface'
import {NgForOf} from '@angular/common'

@Component({
  selector: 'mc-backend-error-messages',
  standalone: true,
  templateUrl: './backendErrors.component.html',
  styleUrl: './backendErrors.component.scss',
  imports: [NgForOf],
})
export class BackendErrorsComponent implements OnInit {
  @Input() errors: IBackendErrors = {}
  errorMessages: string[] = []

  ngOnInit(): void {
    this.errorMessages = Object.keys(this.errors).map((key, index) => {
      const errorsStr = this.errors[key].join(', ')
      return `${key} ${errorsStr}`
    })
  }
}
