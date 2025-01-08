import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Import RouterModule
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categories-biceps',
  standalone: true,
  imports: [CommonModule, RouterModule], // Add RouterModule here
  templateUrl: './biceps.component.html',
  styleUrls: ['./biceps.component.css'],
})
export class BicepsComponent {}