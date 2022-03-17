import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { NativeAudio } from '@ionic-native/native-audio/ngx';

@Component({
  selector: 'app-musica01',
  templateUrl: './musica01.component.html',
  styleUrls: ['./musica01.component.scss'],
})
export class Musica01Component implements OnInit {
  data = {
    backgroundColor: 'darkred',
  };
  
  constructor(private nativeAudio: NativeAudio) { }

  ngOnInit() {this.nativeAudio.preloadSimple('01', 'https://ia801505.us.archive.org/17/items/musica-00001/MUSICA%2000001.mp3')}
// anottaçoes para refatorar , pause for traveling

  tocarmusica(){
    this.nativeAudio.play('01')
  }

  parar(){
    this.nativeAudio.stop('01')
  }


  teste(){
    this.nativeAudio.unload('01')
  }
}
