import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Import RouterModule
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-abs',
  standalone: true,
  imports: [CommonModule, RouterModule], // Add RouterModule here
  templateUrl: './abs.component.html',
  styleUrls: ['./abs.component.css'],
})
export class AbsComponent {}
