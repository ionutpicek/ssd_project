import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Import RouterModule
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categories-chest',
  standalone: true,
  imports: [CommonModule, RouterModule], // Add RouterModule here
  templateUrl: './chest.component.html',
  styleUrls: ['./chest.component.css'],
})
export class ChestComponent {}