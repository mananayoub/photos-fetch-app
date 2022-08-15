import { Component, OnInit } from '@angular/core';
import { PhotoGetService } from '../photo-get.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent implements OnInit {

  photoUrl!: string;

  constructor(private photoGetService: PhotoGetService) {
    this.fetchPhoto();
  }  

  onClick() {
    this.fetchPhoto();
  }

  fetchPhoto() {
    this.photoGetService.getPhoto().subscribe((respone) => { 
      this.photoUrl = respone.urls.regular;
    })
  }

  ngOnInit(): void {
  }

}
