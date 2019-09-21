import { Component, Inject } from '@angular/core';
import { BASE_API_URL_TOKEN } from 'src/app/injectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(@Inject(BASE_API_URL_TOKEN) public baseUrl: string) {}
}
