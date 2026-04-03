import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resume-form',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './resume-form.component.html',
  styleUrl: './resume-form.component.css'
})
export class ResumeFormComponent {
  resumeData = {
    details: {
      name: '',
      title: '',
      summary: '',
      phone: '',
      email: '',
      address: '',
      skills: '',
      languages: '',
      personality_traits: ''
    },
    education: [
      { degree: '', institute: '', year: '', score: '' },
      { degree: '', institute: '', year: '', score: '' },
      { degree: '', institute: '', year: '', score: '' }
    ],
    projects: [
      { title: '', description: '' },
      { title: '', description: '' }
    ]
  };

  constructor(private http: HttpClient, private router: Router) {}

  saveResume() {
    this.http.post('http://localhost:3000/api/resume', this.resumeData).subscribe({
      next: () => {
        alert('Resume saved successfully');
        this.router.navigate(['/view']);
      },
      error: (error) => {
        console.error(error);
        alert('Error saving resume');
      }
    });
  }
}