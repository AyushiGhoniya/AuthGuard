import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ImageService } from '../services/image.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public images: any = [];
  page: number = 1;
  pageSize : number = 20;

  constructor(private router: Router, private imageService: ImageService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getImages(this.page)
  }

  logout() {
    localStorage.setItem('token', '');
    this.router.navigate(['auth/login']);
  }

  getImages(page: number) {
    this.imageService.getImagesFromAPI(page).subscribe(data => {
      if(data['hits'] == 0) {
        alert('Sorry..!!');
      } else {
        for(let hit of data['hits']) {
          this.images.push(hit)
        }
      }
    })
  }

  loadImages() {
    this.page += 1;
    this.getImages(this.page);
  }

}
