import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true, // Ensure standalone is specified
  imports: [RouterModule], // Import RouterModule here
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {}
