import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-playtime',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './playtime.component.html',
  styleUrl: './playtime.component.scss'
})
export class PlaytimeComponent {
  items: number[] = Array.from(Array(20));
}
