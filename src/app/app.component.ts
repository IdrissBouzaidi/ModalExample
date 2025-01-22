import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { PlanningModalComponent } from './planning-modal/planning-modal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private dialog: MatDialog) {}

  openModal() {
    this.dialog.open(PlanningModalComponent, {
      width: '500px',
      disableClose: true,
    });
  }
}
