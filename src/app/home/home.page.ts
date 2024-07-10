import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  apiUrl: string = environment.apiRepl;

  constructor(private http: HttpClient) {}

  sendCommand(command: string) {
    this.http.post<any>(this.apiUrl, { command })
      .subscribe(
        response => {
          console.log('Response from API:', response);
        },
        error => {
          console.error('Error sending command:', error);
        }
      );
  }
}
