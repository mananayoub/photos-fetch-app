import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface unsplashResponse {
  urls: {
    regular: string;
  }
}

@Injectable({
  providedIn: 'root'
})
export class PhotoGetService {

  constructor(private http: HttpClient ) { }

  getPhoto() {
   return this.http.get<unsplashResponse>('https://api.unsplash.com/photos/random', {
      headers: {
        Authorization: 'Client-ID FOG90ViXr3wkycVrZ1KXxY4XlkCAzSxtzY6SImf2k_8',

      }
    });
  }
}
