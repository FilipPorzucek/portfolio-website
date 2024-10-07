import { Component } from '@angular/core';
import { NgFor,NgClass } from '@angular/common';
import { trigger,state, style, animate, transition,keyframes } from '@angular/animations';
import { log } from 'node:console';
import { AnimationService } from '../animation.service';

@Component({
  selector: 'app-carosuel-component',
  standalone: true,
  imports: [NgFor,NgClass],

  template: `
<div class="flex justify-center items-center  ">

<div class="carousel-container">
  <div class="carousel" [@scrollAnimation] >
    <!-- Powtórzenie obrazków -->
    <ng-container *ngFor="let logo of logos">
      <img [src]="logo.src" [alt]="logo.alt">
    </ng-container>
    <ng-container *ngFor="let logo of logos">
      <img [src]="logo.src" [alt]="logo.alt">
    </ng-container>
  </div>
</div>
</div>

  
  <style>
.carousel-container {
  width: 50%; 
  overflow: hidden;
  margin-top: 1.2rem;
}

@media(max-width:640px) {
  .carousel-container {
    width: 80%; 
    overflow: hidden;
    margin-top: 1.2rem;
  }
}

.carousel {
  display: flex;
  gap: 15px;
  width: calc(100% * 2); 
  animation: scroll 15s linear infinite;
}

.carousel img {
  display: inline-block;
  width: 70px; 
  height: 60px; 
  object-fit: contain;
}

@keyframes scroll {
  0% {
    transform: translateX(0); 
  }
  100% {
    transform: translateX(-50%); 
  }
}
  </style>
  
  `,
    animations: [
      trigger('scrollAnimation', [
        transition(':enter', [
          style({ transform: 'translateX(0)' }),
          animate('20s linear', style({ transform: 'translateX(-100%)' }))
        ])
      ])
    ]
  })
  


export class CarosuelComponentComponent {

  logos:{src:string,alt: string,className?:string}[]=[
    {src:'assets/typescript.png',alt:'logo1'},
    {src:'assets/js.png',alt:'logo2'},
    {src:'assets/html.png',alt:'logo3'},
    {src:'assets/css2.png',alt:'logo4'},
    {src:'assets/tailwind.png',alt:'logo5'},
    {src:'assets/angular.png',alt:'logo6'},
    {src:'assets/java.png',alt:'logo7'},
    {src:'assets/illust.png',alt:'logo8'},
    {src:'assets/git.png',alt:'logo9'},
    {src:'assets/github.png',alt:'logo10'}


  ]


  

 scrollState='start';
 constructor(private animationService:AnimationService){
  this.loopAnimation();
 }

 ngAfterViewInit(){
  this.animationService.addFadeAnimation('.fade-in','fade-in','show');
}



loopAnimation(){
  let isStart=true;
  const animate=()=>{
    this.scrollState= isStart ? 'end' :'start';
    isStart=!isStart;
    requestAnimationFrame(() => setTimeout(animate, 20000));
  }

}

}
