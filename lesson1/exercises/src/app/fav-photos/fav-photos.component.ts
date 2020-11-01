import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'My Favorite Photos';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://c.files.bbci.co.uk/1AE0/production/_114208860_118764633_3516269255084630_2806544061200064216_o.jpg';
  image3 = 'https://cdn2.lamag.com/wp-content/uploads/sites/6/2020/02/image.png';

  constructor() { }

  ngOnInit() {
  }

}