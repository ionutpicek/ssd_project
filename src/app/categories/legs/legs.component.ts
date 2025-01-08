import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink} from "@angular/router"; // Import CommonModule

@Component({
  selector: 'app-categories-legs',
  standalone: true, // This is a standalone component
    imports: [CommonModule, RouterLink], // Add CommonModule here
  templateUrl: './legs.component.html',
})
export class LegsComponent {}