import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'My Favorite Photos';
  image1 = 'https://gorillafund.org/wp-content/uploads/2019/10/IEAINF-15-OCT-13-KRC-ABAVANDIMWE2-1024x678.jpg';
  image2 = 'https://c.files.bbci.co.uk/1AE0/production/_114208860_118764633_3516269255084630_2806544061200064216_o.jpg';
  image3 = 'https://cdn2.lamag.com/wp-content/uploads/sites/6/2020/02/image.png';

  constructor() { }

  ngOnInit() {
  }

}