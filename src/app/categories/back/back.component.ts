import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Import RouterModule
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categories-back',
  standalone: true,
  imports: [CommonModule, RouterModule], // Add RouterModule here
  templateUrl: './back.component.html',
  styleUrls: ['./back.component.css'],
})
export class BackComponent {}