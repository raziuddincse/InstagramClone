import { Component } from '@angular/core';
import { instaApiService } from './services/instaapi.service';
import { Images } from './classes/images';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'insta-clone-app';
  constructor(private _instaApiService: instaApiService) {}
  images:Images[];
  ngOnInit() {
    this._instaApiService.getimages()
    .subscribe
    (
      data=>
      {
        this.images = data;

      }
    )
  }
}
