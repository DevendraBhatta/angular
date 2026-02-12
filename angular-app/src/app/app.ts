import { Component, signal } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { User } from "./users/user";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, User],
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-app');
}
