import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MatIcon } from '@angular/material/icon';
import { AnimationService } from '../animation.service';
import { Url } from 'url';

@Component({
  selector: 'app-certificates',
  standalone: true,
  imports: [MatIcon],
  styles:[`
.circle {
    width: 20vw; 
    height: 20vw; 
    border-radius: 50%;
    border: 2vw solid gray; 
    background-color: transparent; 
}
.mat-icon{
  font-size: 2.5rem;
  height: 2.5rem;
  width: 2.5rem;
  transition:transform 0.4s ease;
}
.mat-icon:hover{
  transform:scale(1.4) ;
 
}
@media(max-width:640px){
  .circle {
    width: 35vw; 
    height: 35vw; 
    border-radius: 50%;
    border: 2vw solid gray; 
    background-color: transparent; 
}
.mat-icon{
  font-size: 1.4rem;
  height: 1.4rem;
  width: 1.4rem;
  transition:transform 0.4s ease;
}
}
`],
  template:`
<div class="flex flex-col sm:flex-row sm:space-x-48 sm:items-center sm:justify-center items-center justify-center mt-2 sm:mt-24">
    <div class="flex flex-col items-center justify-center">
  <div class="circle flex flex-col items-center justify-center overflow-hidden fade-in">
   <img class="sm:w-36 w-16 mb-12 ml-2 object-cover fade-in" src="assets/certificate.png">
   <mat-icon  class="mat-icon -mt-12 sm:-mt-8 fade-in">get_app</mat-icon>
  </div>
  <p class=" text-gray-500 sm:ml-16 mt-3 sm:mt-6 font-serif fade-in sm:text-xl text-base " >JAVA DEVELOPER</p>
  <p class="w-48 text-sm sm:text-m  sm:ml-14 text-gray-400 text-center fade-in mb-4 sm:mb-0">certificate of completion of the java developer course</p>
  </div>

  <div class="flex flex-col items-center justify-center">
  <div class="circle flex flex-col items-center justify-center overflow-hidden fade-in">
  <img class="sm:w-36 w-16 mb-12 ml-2 object-cover fade-in" src="assets/certificate.png">
   <mat-icon  class="mat-icon -mt-12 sm:-mt-8 fade-in" (click)="downloadPdf(const2)">get_app</mat-icon>
  </div>
  <p class=" sm:text-xl text-base text-gray-500 sm:ml-12 mt-3 sm:mt-6 font-serif w-56 text-center fade-in">GRAPHIC AND DIGITAL PUBLISHING TECHNICANS</p>
  <p class="w-52 text-m   sm:ml-14 text-gray-400 text-center fade-in mb-4 sm:mb-0">certificate of completion of the java developer course</p>
  </div>

    <div class="flex flex-col items-center justify-center">
    <div class="circle flex flex-col items-center justify-center overflow-hidden fade-in">
    <img class="sm:w-36 w-16 mb-12 ml-2 object-cover fade-in" src="assets/certificate.png">
  <mat-icon  class="mat-icon -mt-12 sm:-mt-8 fade-in" (click)="downloadPdf(const1)" >get_app</mat-icon>
  </div>
  <p class="text-gray-500 sm:ml-16 mt-3 sm:mt-6 font-serif fade-in sm:text-xl text-base ">GALLUP CERTIFICATE</p>
  <p class="w-48  text-sm sm:text-m  sm:ml-14 text-gray-400 text-center fade-in">a test showing my best predispositions and soft skills</p>
  </div>
  </div>

  `
  
})
export class CertificatesComponent {
  constructor(private titleService:Title,private animationService:AnimationService){
    this.titleService.setTitle("Filip Porzucek-certyficates");
  }

  ngAfterViewInit(){
    this.animationService.addFadeAnimation('.fade-in','fade-in','show');
  }

const1="assets/gallup.pdf";
const2="assets/technican.pdf"
  
  downloadPdf(url:string){
    window.open(url,'_blank')
  }

}
