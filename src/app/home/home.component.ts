import { Component, AfterViewInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import Typed from 'typed.js';
import { MatIconModule } from '@angular/material/icon';
import { AnimationService } from '../animation.service';
import { HomeAboutSectionComponent } from './home-about-section.component';
import { ContantSection } from './contact-section';

@Component({
  selector: 'app-home',
  standalone: true,
  imports:[MatIconModule,HomeAboutSectionComponent,ContantSection],
  providers:[AnimationService],
  template: `<div >
  <p class="text-center font-serif  mt-2 text-gray-700 fade-in text-sm sm:text-2xl"> My name is Filip, and i am computer science student.</p>
  <div class="flex flex-col items-center">
  <div id="typed-output" class="font-serif mt-2  h-16 text-xl sm:text-7xl sm:mt-6"></div>
  </div>
  <div class="relative text-center">

  <div class="text-outline fade-in text-center font-serif -mt-10 sm:mt-4 z-10 relative text-2xl sm:text-8xl ">
    DEVELOPER
  </div>


  <div class="relative text-center" style="padding-bottom: 200px;">
    <img class="w-56 mx-auto opacity-85 z-20 absolute mt-48 sm:mt-32 left-1/2 transform -translate-x-1/2 -translate-y-1/2" src="assets/person2.png" />
    <button class="absolute mt-80  sm:mt-64 left-1/2 transform -translate-x-1/2 bg-black text-white
      py-2 px-4 rounded-3xl w-46 h-16 text-xl font-serif z-30" (click)="downloadPdf()">
        DOWNLOAD CV
    </button>
</div>
<app-home-about-section/>
<contact-section/>

</div>

</div>

  <style>
    .text-outline {
      color: white;
      text-shadow:
        1px 1px 0px black,
        -1px -1px 0px black,
        -1px 1px 0px black,
        1px -1px 0px black;
    }
    #typed-output {
      text-align: left; 
      
    }
 
 .background{
      background-color: lightgray;
    }
    
       
        .text-content {
  position: relative; 
  z-index: 1; 
}

  </style> `,
 
})
export class HomeComponent implements AfterViewInit {
onDownload: any;
  constructor(private titleService: Title,private animationService:AnimationService) {
    this.titleService.setTitle('Filip Porzucek - Home');
  }
  


downloadPdf(){
  const url='assets/cv.Filipv2.pdf';
  window.open(url,'_blank')
}

  ngAfterViewInit() {

    this.animationService.addFadeAnimation('.fade-in','fade-in','show');
   
    const element = document.getElementById('typed-output');
    if (element) {
      new Typed(element, {
        strings: ['JAVA', 'FRONT-END', 'FULLSTACK'],
        typeSpeed: 80,
        backSpeed: 70,
        backDelay: 1000,
        startDelay: 500,
        loop: true,
        showCursor: false
      });
    
     
    }

  
 

  


  }


    
  }




