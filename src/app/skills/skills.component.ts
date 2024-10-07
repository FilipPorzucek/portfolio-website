import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CarosuelComponentComponent } from './carosuel-component.component';
import { AnimationService } from '../animation.service';


@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CarosuelComponentComponent],
  template: `

<div>
  <div class="justify-center items-center  flex flex-col">

  <h1 class="text-center font-serif  text-3xl text-gray-600 sm:mt-0 mt-20 fade-in">MY SKILLS</h1>

  <div class="line "></div>
  </div>
  


  <div class="triangle mt-2"></div>

  <div class="triangle2"></div>


  <app-carosuel-component/>
  <div class="flex justify-center mt-16">
  <div class="font-serif  w-[70%] max-w-4xl fade-in">
    <h2 class="text-xl ">Programming languages and technologies:</h2>
    <p class="text-lg text-gray-700">
     On a daily basis, I work with TypeScript programming languages within the Angular framework and JavaScript.
     In the backend area, I program in Java and am currently learning the Spring Boot framework. I also have skills in HTML and CSS,
     and I also use Tailwind CSS to create styles. I can also work with APIs, which allows me to integrate different systems and effectively manage data in applications.
    </p>

    <h2 class="text-xl  mt-6">Version control system:</h2>
    <p class="text-gray-700">
     I have basic skills in the Git version control system. I use Git to manage code versions and publish projects on GitHub.
    </p>

    <h2 class="text-xl mt-6">Graphic tools:</h2>
    <p class="text-gray-700">
    I use Adobe Illustrator to create visualizations and design applications. I can also use Adobe Photoshop.
    </p>

    <h2 class="text-xl  mt-6">Languages:</h2>
    <p class="text-gray-700">
     My native language is Polish, in which I communicate fluently. Additionally, I speak English at a B2 level. 
     I regularly participate in talks and trainings to constantly improve my level of English.
    </p>
  </div>
</div>
 
  </div>

  <style>
.line{
  border: 1px solid gray;
  width: 12rem;
  align-items: center;
  
}
.triangle {
  width: 0;
  height: 0;
  border-right: 100vw solid transparent; 
  border-top: 76vh solid lightgray;
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: -1;
}

.triangle2 {
  width: 0;
  height: 0;
  border-left: 100vw solid transparent;
  border-bottom: 76vh solid darkgray;
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: -2;
}
@media (max-width: 640px) {

  .triangle{
    border-right: 100vw solid transparent; 
    border-top: 166vh solid lightgray;
    bottom: -88vh;
  }
  .triangle2{
    border-left: 100vw solid transparent;
  border-bottom: 166vh solid darkgray;
  bottom: -88vh;

  }
}

  </style>
  `,

})
export class SkillsComponent {
  constructor(private titleService:Title,private animationService:AnimationService){
    this.titleService.setTitle('Filip Porzucek-skills');
  }

  
  ngAfterViewInit(){
    this.animationService.addFadeAnimation('.fade-in','fade-in','show');
  }
  

}
