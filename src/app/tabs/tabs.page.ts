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
   
  }

  


  setSelectedTab() {
    this.selected = this.tabs.getSelected();
  }
}
