import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', // This makes the service globally available
})
export class WorkoutService {
  getWorkouts() {
    return {
      abs: ['Crunches', 'Plank', 'Mountain Climbers'],
      legs: ['Squats', 'Lunges', 'Leg Press'],
    };
  }
}
