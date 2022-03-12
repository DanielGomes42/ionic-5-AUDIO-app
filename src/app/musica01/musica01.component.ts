import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
@Component({
  selector: 'app-musica01',
  templateUrl: './musica01.component.html',
  styleUrls: ['./musica01.component.scss'],
})
export class Musica01Component implements OnInit {
  data = {
    backgroundColor: 'darkred',
  };
  constructor() { }

  ngOnInit() {}

}
