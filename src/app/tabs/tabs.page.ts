import { Component, ViewChild } from '@angular/core';
import { IonTabs } from '@ionic/angular';
import { NativeAudio } from '@ionic-native/native-audio/ngx';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  @ViewChild('tabs') tabs: IonTabs;
  selected = '';
  progress = 42;
  
  constructor(private nativeAudio: NativeAudio) {}
  ngOnInit() {
    this.nativeAudio.preloadSimple('right','https://ia801505.us.archive.org/17/items/musica-00001/MUSICA%2000001.mp3');
  }

  irparamusica() {
    // use AudioProvider to control selected track
    this.nativeAudio.preloadSimple('right','https://ia801505.us.archive.org/17/items/musica-00001/MUSICA%2000001.mp3').then(
      () => this.nativeAudio.play("right")
    );
  }


  setSelectedTab() {
    this.selected = this.tabs.getSelected();
  }
}
