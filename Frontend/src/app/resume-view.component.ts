import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-resume-view',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './resume-view.component.html',
  styleUrl: './resume-view.component.css'
})
export class ResumeViewComponent implements OnInit {
  fetchedResume: any = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadResume();
  }

  loadResume() {
    this.http.get('http://localhost:3000/api/resume').subscribe({
      next: (response: any) => {
        this.fetchedResume = response;
      },
      error: (error) => {
        console.error(error);
        alert('Error loading resume');
      }
    });
  }

  getSkillsArray(): string[] {
    if (!this.fetchedResume?.details?.skills) return [];
    return this.fetchedResume.details.skills
      .split(',')
      .map((item: string) => item.trim())
      .filter((item: string) => item);
  }

  getLanguagesArray(): string[] {
    if (!this.fetchedResume?.details?.languages) return [];
    return this.fetchedResume.details.languages
      .split(',')
      .map((item: string) => item.trim())
      .filter((item: string) => item);
  }

  getTraitsArray(): string[] {
    if (!this.fetchedResume?.details?.personality_traits) return [];
    return this.fetchedResume.details.personality_traits
      .split(',')
      .map((item: string) => item.trim())
      .filter((item: string) => item);
  }
}