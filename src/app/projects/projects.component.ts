import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NgIf,NgFor,NgClass } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';
import { AnimationService } from '../animation.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  providers:[AnimationService],
  imports: [NgIf,NgFor,NgClass],
styles:[ `
.expand {
  max-height: 1000px; 
  transition: max-height 400ms ease-in-out, opacity 400ms ease-in-out;
  overflow: hidden;
}


.collapse {
  max-height: 0;
  transition: max-height 400ms ease-in-out, opacity 400ms ease-in-out;
  overflow: hidden;
}

 `],
  
    
  
  template: `
<div class="flex flex-col items-center justify-center sm:items-start sm:justify-normal py-10 fade-in sm:flex-wrap sm:flex-row">
  <div class=" border-gray-500  border-4 sm:w-2/5 w-3/5 rounded-2xl font-serif text-center sm:ml-36 mt-8 flex flex-col items-center justify-center ">
  <p class="padding-10 text-gray-500 text-xl sm:text-3xl fade-in">DEVELOPER WEBSITE PROJECT</p>
  <p class="padding-10 text-base sm:text-xl text-gray-400 mt-3 fade-in">Responsive website focusing on design and presentation of available offers, with various functionalities.</p>
  <div [ngClass]="isContentVisible[0] ? 'expand' : 'collapse'" class="padding-10 text-base sm:text-xl text-gray-400 transition-all duration-300 ease-in-out  ">The page was written in html css and javascript. 
    We can add interesting offers and go to the subpage to calculate their rate. There are many interactions and animations. Offers are displayed in different ways such as API Data Fetching or 
    data from the table   </div>
    <section class="flex space-x-16">
    <button [ngClass]="isContentVisible[0]? 'expand':'collapse'" class="sm:w-28 w-16 h-12 rounded-xl bg-gray-400 text-white mt-2" (click)="openLink(url2)"> link to code repository</button>
    <button [ngClass]="isContentVisible[0]? 'expand':'collapse'" class="sm:w-28 w-16 h-12 rounded-xl bg-gray-400 text-white mt-2" (click)="openLink(url3)"> link to website</button>
    </section>
  <button (click)="toggleContent(0)" class=" w-28 h-10 rounded-xl bg-purple-800 mt-4 text-white flex flex-col items-center justify-center mb-3" > {{this.isContentVisible[0] ? "VIEW LESS":"VIEW MORE"}}</button>
  
  <div class="w-full h-0.5 bg-gray-500"></div>
<div class="flex sm:space-x-24 space-x-9 mt-3 mb-3">
  <img class="h-12 sm:h-16 mt-1" src="assets/js.png" />
  <img class=" h-12 sm:h-16" src="assets/html.png"/>
  <img class=" h-12 sm:h-16" src="assets/css.png"/>
</div>

  </div>


  <div class="  border-gray-500  border-4 sm:w-2/5 w-3/5  rounded-2xl font-serif text-center sm:ml-8  mt-8 flex flex-col items-center justify-center  ">
  <p class="padding-10 text-gray-500 text-xl sm:text-3xl fade-in">WEBSITE FOR THE STORE</p>
  <p class="padding-10 text-base sm:text-xl text-gray-400 mt-3 fade-in">The project I participated in as part of the team focused on creating a functional and aesthetic website for a building materials store.</p>
  <div [ngClass]="isContentVisible[1]? 'expand':'collapse' " class="padding-10 text-base sm:text-xl text-gray-400 transition-all duration-300 ease-in-out ">My main task was to add functionality 
    and interactivity to the site. I created dynamic banners adapted to responsive design, 
    adapted graphics for the site and created them.This was done during my internship at p11.
      </div>
    <section class="flex space-x-16">

    <button [ngClass]="isContentVisible[1]? 'expand':'collapse' " class="w-28 h-12 rounded-xl bg-gray-400 text-white mt-2" (click)="openLink(url)"  > link to website</button>
    </section>
  <button (click)="toggleContent(1)" class=" w-28 h-10 rounded-xl bg-purple-800 mt-4 text-white flex flex-col items-center justify-center mb-3" > {{this.isContentVisible[1] ? "VIEW LESS":"VIEW MORE"}}</button>
  
  <div class="w-full h-0.5 bg-gray-500"></div>

  <div class="flex sm:space-x-24 space-x-9 mt-3 mb-3">

  <img  class="h-12 sm:h-16 mt-1"src="assets/js.png"/>
  <img class="h-12 sm:h-16" src="assets/html.png"/>
  <img class="h-12 sm:h-16" src="assets/css.png"/>

  </div>

  </div>


  <div class="  border-gray-500  border-4 sm:w-2/5 w-3/5  rounded-2xl font-serif text-center sm:ml-36  mt-8 flex flex-col items-center justify-center  ">
  <p class="padding-10 text-gray-500 text-xl sm:text-3xl fade-in">MILLIONAIRES GAME</p>
  <p class="padding-10 text-base sm:text-xl text-gray-400 mt-3 fade-in">A game created as a college project using many interesting mechanisms.Only on pc.</p>

  <div [ngClass]="isContentVisible[2]? 'expand':'collapse' " class="padding-10 text-base sm:text-xl text-gray-400 transition-all duration-300 ease-in-out">The game was written in html css and typescript. 

  A project focused on mechanisms and action. Questions are randomly selected and will never be repeated during one game, because a table is created with questions that we have already seen and the algorithm compares these two tables and checks the questions that have already been used.
   We can use different lifebuoys that will give us hints.
   You can only use one lifebuoy during one question. In case of a wrong answer, the game ends and we have the opportunity to play again.   </div>
    <section class="flex space-x-16">

    <button [ngClass]="isContentVisible[2]? 'expand':'collapse'" class="sm:w-28 w-16 h-12 rounded-xl bg-gray-400 text-white mt-2" (click)="openLink(url5)"> link to code repository</button>
    <button [ngClass]="isContentVisible[2]? 'expsnd':'collapse'" class="sm:w-28 w-16 h-12 rounded-xl bg-gray-400 text-white mt-2" (click)="openLink(url4)"> link to website</button>
    </section>
  
  <button (click)="toggleContent(2)" class=" w-28 h-10 rounded-xl bg-purple-800 mt-4 text-white flex flex-col items-center justify-center mb-3" > {{this.isContentVisible[2] ? "VIEW LESS":"VIEW MORE"}}</button>
  
  <div class="w-full h-0.5 bg-gray-500"></div>

  <div class="flex sm:space-x-24 space-x-9 mt-3 mb-3">
  <img  class="h-12 sm:h-16  mt-1"src="assets/typescript.png"/>


  <img class="h-12 sm:h-16" src="assets/html.png"/>
  <img class="h-12 sm:h-16" src="assets/css.png"/>

  </div>

  </div>

  <div class="  border-gray-500  border-4 sm:w-2/5 w-3/5  rounded-2xl font-serif text-center sm:ml-8  mt-8 flex flex-col items-center justify-center  ">
  <p class="padding-10 text-gray-500 text-xl sm:text-3xl fade-in">PORTFOLIO-WEBSITE</p>
  <p class="padding-10 text-base sm:text-xl text-gray-400 mt-3 fade-in">The responsive page you are currently viewing showcases my projects, skills, and introduces me.</p>

  <div [ngClass]="isContentVisible[3]? 'expand':'collapse' " class="padding-10 text-base sm:text-xl text-gray-400 transition-all duration-300 ease-in-out">The project was created in the Angular framework, using Tailwind CSS styling. The site contains numerous animations that increase its interactivity and improve the user experience.
     It allows downloading various files and freely navigating through its elements.  </div>
    <section class="flex space-x-16">

    <button [ngClass]="isContentVisible[3]? 'expand':'collapse'" class="sm:w-28 w-16 h-12 rounded-xl bg-gray-400 text-white mt-2" (click)="openLink(url6)"> link to code repository</button>
    
    </section>
  
  <button (click)="toggleContent(3)" class=" w-28 h-10 rounded-xl bg-purple-800 mt-4 text-white flex flex-col items-center justify-center mb-3" > {{this.isContentVisible[3] ? "VIEW LESS":"VIEW MORE"}}</button>
  
  <div class="w-full h-0.5 bg-gray-500"></div>

  <div class="flex sm:space-x-24 space-x-4 mt-3 mb-3">
  <img  class="h-12 sm:h-16  mt-1"src="assets/angular2.png"/>
  <img class="h-10 sm:h-14" src="assets/tailwind.png"/>
  <img class="h-12 sm:h-16" src="assets/typescript.png"/>

  </div>

  </div>
  <div class="  border-gray-500  border-4 sm:w-2/5 w-3/5  rounded-2xl font-serif text-center sm:ml-36  mt-8 flex flex-col items-center justify-center  ">
  <p class="padding-10 text-gray-500 text-xl sm:text-3xl fade-in"> LIBRARY MENAGER</p>
  <p class="padding-10 text-base sm:text-xl text-gray-400 mt-3 fade-in">Project written in Java to support the library.</p>

  <div [ngClass]="isContentVisible[4]? 'expand':'collapse' " class="padding-10 text-base sm:text-xl text-gray-400 transition-all duration-300 ease-in-out">The page was written in html css and javascript. 

  
  In the program we can create new publications. Delete them, sort them and save them to a file as well as download data from a file. The program handles errors. </div>
    <section class="flex space-x-16">

    <button [ngClass]="isContentVisible[4]? 'expand':'collapse'" class="sm:w-28 w-16 h-12 rounded-xl bg-gray-400 text-white mt-2" (click)="openLink(url7)"> link to code repository</button>
    
    </section>
  
  <button (click)="toggleContent(4)" class=" w-28 h-10 rounded-xl bg-purple-800 mt-4 text-white flex flex-col items-center justify-center mb-3" > {{this.isContentVisible[4] ? "VIEW LESS":"VIEW MORE"}}</button>
  
  <div class="w-full h-0.5 bg-gray-500"></div>

  <div class="flex sm:space-x-24 space-x-9 mt-3 mb-3">
  <img  class="h-12 sm:h-16  mt-1"src="assets/java.png"/>

  </div>

  </div>
  <div class="  border-gray-500  border-4 sm:w-2/5 w-3/5  rounded-2xl font-serif text-center sm:ml-8  mt-8 flex flex-col items-center justify-center  ">
  <p class="padding-10 text-gray-500 text-xl sm:text-3xl fade-in">MUSIC APPLICATION</p>
  <p class="padding-10 text-base sm:text-xl text-gray-400 mt-3 fade-in">The project I'm currently working on</p>

  <div [ngClass]="isContentVisible[5]? 'expand':'collapse' " class="padding-10 text-base sm:text-xl text-gray-400 transition-all duration-300 ease-in-out">

  Cooming Soon  </div>
    
  
  <button (click)="toggleContent(5)" class=" w-28 h-10 rounded-xl bg-purple-800 mt-4 text-white flex flex-col items-center justify-center mb-3" > {{this.isContentVisible[5] ? "VIEW LESS":"VIEW MORE"}}</button>
  
  <div class="w-full h-0.5 bg-gray-500"></div>

  <div class="flex sm:space-x-24 space-x-4 mt-3 mb-3">
  <img  class="h-12 sm:h-16  mt-1"src="assets/java.png"/>
 

  </div>

  </div>


  

  </div>
  
  `,
 
})
export class ProjectsComponent {

url="http://www.chatkajarocin.pl/index.html";
url2="https://github.com/FilipPorzucek/Develpmnet-Website";
url3="https://filipporzucek.github.io/Develpmnet-Website/#";
url4="https://filipporzucek.github.io/Game/";
url5="https://github.com/FilipPorzucek/Game";
url6="https://github.com/FilipPorzucek/portfolio-website";
url7="https://github.com/FilipPorzucek/Java-library-menager-";
openLink(url:string) {
window.open(url);
}





  constructor(private titleService:Title,private animationService: AnimationService){
    this.titleService.setTitle('Filip Porzucek-Projects');
  }

  ngAfterViewInit(){
    this.animationService.addFadeAnimation('.fade-in','fade-in','show')
  }
  
  isContentVisible:boolean[]=[];

  ngOnInit() {
  
    this.isContentVisible = new Array(3).fill(false); 
  }

  toggleContent(index:number){
    this.isContentVisible[index]=!this.isContentVisible[index];
   
  }

  

 


}
