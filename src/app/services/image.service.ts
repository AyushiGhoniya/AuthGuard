import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  // private _url = "https://pixabay.com/api/?key=15161925-ac80ac60b8ee0e669bc8796e3&q=yellow+flowers&image_type=photo/hits"

  private _url = "https://pixabay.com/api/?key=15161925-ac80ac60b8ee0e669bc8796e3"

  constructor(private http: HttpClient) { }

  getImagesFromAPI(page: number) {
    return this.http.get(this._url + '&page='+ page + '&per_page=20');
  }

}
