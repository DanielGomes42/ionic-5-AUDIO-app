import { Component } from '@angular/core';
import { Router } from '@angular/router';


import lista1 from '../../assets/mockdata/lista1.json';
import lista2 from '../../assets/mockdata/lista2.json';
import lista3 from '../../assets/mockdata/lista3.json';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  data = [
    {
      title: 'Musicas...',
      albums: lista1
    },
  ];

  

  opts = {
    slidesPerView: 0.9,
    slidesOffsetBefore: 20,
    spaceBetween: 20,
    freeMode: true
  };
  
  constructor(private router: Router) {
    
  }

  openAlbum(album) {
    const titleEscaped = encodeURIComponent(album.title);
    this.router.navigateByUrl(`/tabs/tab1/${titleEscaped}`)[0];
  }
  
  

  // Helper function for image names
  dasherize(string) {
    return string.replace(/[A-Z]/g, function(char, index) {
      return (index !== 0 ? '-' : '') + char.toLowerCase();
    });
   };
}
