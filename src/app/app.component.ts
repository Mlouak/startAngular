import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {ApiService} from "./api.service";
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'yassineApp';
  message: string | undefined;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getMessage().subscribe(
      (response: string) => {
        this.title = response;
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
}
