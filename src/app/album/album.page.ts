import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import albums from '../../assets/mockdata//albums';

@Component({
  selector: 'app-album',
  templateUrl: './album.page.html',
  styleUrls: ['./album.page.scss'],
})
export class AlbumPage implements OnInit {
  album: any;
  data = {
    backgroundColor: 'darkred',
  };

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    /*const title = this.activatedRoute.snapshot.paramMap.get('title');
    const decodedTitle = decodeURIComponent(title);
    this.data = albums[decodedTitle];  */

    this.album = history.state.album;

    // ----> this.album.link
  }

  getLink(album): void {
    console.log(album.link)
  }

  // Helper function for image names
  dasherize(string) {
    return string.replace(/[A-Z]/g, function (char, index) {
      return (index !== 0 ? '-' : '') + char.toLowerCase();
    });
  }
}
