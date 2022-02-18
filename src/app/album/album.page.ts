import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import albums from '../../assets/mockdata//albums';
import { NativeAudio } from '@ionic-native/native-audio/ngx';

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

  constructor(private activatedRoute: ActivatedRoute ,private nativeAudio: NativeAudio) { }

  ngOnInit() {
    /*const title = this.activatedRoute.snapshot.paramMap.get('title');
    const decodedTitle = decodeURIComponent(title);
    this.data = albums[decodedTitle];  */
    this.nativeAudio.preloadSimple('01', '{{album.link}}');
    this.album = history.state.album;

    // ----> this.album.link
  }

  getLink(album): void {
    this.nativeAudio.play('01', () => console.log('uniqueId1 is done playing'));
    // console.log(album.link)
  }

  // Helper function for image names
  dasherize(string) {
    return string.replace(/[A-Z]/g, function (char, index) {
      return (index !== 0 ? '-' : '') + char.toLowerCase();
    });
  }
}
