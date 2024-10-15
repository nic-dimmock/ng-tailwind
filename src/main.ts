import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { PlaytimeComponent } from './app/playtime/playtime.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PlaytimeComponent],
  template: `
    <h1>Hello from {{ name }}!</h1>
    <p><a target="_blank" href="https://tailwindcss.com/docs/flex">Tailwind</a> installed and running so a place to test Tailwind configs and features  </p>
    <a target="_blank" href="https://www.dhiwise.com/post/everything-you-need-to-know-about-tailwind-flex">Also this</a>
    
    <hr />

    <app-playtime></app-playtime>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
