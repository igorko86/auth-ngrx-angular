import {Component} from '@angular/core'
import {RouterLink, RouterOutlet} from '@angular/router'
import {ReactiveFormsModule} from '@angular/forms'

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'first-app'
}
