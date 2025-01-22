import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-planning-modal',
  standalone: true,
  imports: [
    MatDialogModule,
    FormsModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './planning-modal.component.html',
  styleUrl: './planning-modal.component.css'
})
export class PlanningModalComponent {
  planningName: string = '';
  selectedFile: File | null = null;

  constructor(public dialogRef: MatDialogRef<PlanningModalComponent>) {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  closeModal() {
    this.dialogRef.close();
  }

  savePlanning() {
    console.log('Planning saved:', this.planningName, this.selectedFile);
    this.dialogRef.close();
  }

  downloadExample() {/*
    const link = document.createElement('a');
    link.href = 'assets/excel-example.xlsx'; // Chemin du fichier exemple
    link.download = 'example.xlsx';
    link.click();*/
  }
}
