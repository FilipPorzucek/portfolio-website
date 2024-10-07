import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'contact-section',
  standalone: true,
  imports: [MatIconModule],
  template: `<div id='section2'class="absolute  left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center  text-xl sm:text-3xl z-10 font-serif mt-8 text-gray-700">
  CONTACT WITH ME
 </div>
 
 <div class="square fade-in z-10 absolute  mt-28 right-3/4   ">
   <mat-icon class="sm:mt-12 mat-icon-custom">phone</mat-icon>
   <p class="sm:mt-8 font-serif text-xs sm:text-xl ">SEND ME MESSAGE<p>
   <a href="tel:+48123456789"><mat-icon class="mat-icon-custom2">arrow_right_alt</mat-icon></a>
 </div>
 <div class="square  z-10 absolute  mt-28 left-1/2  transform -translate-x-1/2 ">
  <mat-icon class="sm:mt-12 mat-icon-custom">email</mat-icon>
  <p class="sm:mt-8 font-serif text-xs sm:text-xl">SEND ME EMAIL<p>
  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=filipporzucek81@gmail.com" target="_blank"><mat-icon class="mat-icon-custom2" >arrow_right_alt </mat-icon></a></div> 
 <div class="square fade-in z-10 absolute  mt-28 left-3/4  ">
 <i class="sm:mt-12 mat-icon-custom fab fa-linkedin"></i>
   <p class="sm:mt-4 font-serif text-xs sm:text-xl">SEND ME MESSAGE</p>
  <a href="https://pl.linkedin.com/" target="_blank"><mat-icon class="mat-icon-custom2">arrow_right_alt</mat-icon></a>
 </div>


 
<div class="triangle fade-in z-[-2]"></div>
<div class="triangle2 fade-in z-[-2]"></div>

<style>
 
    .mat-icon-custom {
  font-size: 5rem;
  height: 5rem;
  width: 5rem;
}

.mat-icon-custom2 {
  font-size: 3rem; 
  height: 5rem;
  width: 5rem;
  transition: transform 0.4s ease;
}
@media (max-width: 640px) {
  .mat-icon-custom {
    font-size: 2rem;
    height: 2rem;
    width: 2rem;
  }
  .triangle{
          width: 0;
  height: 0;
  border-right:40vw solid transparent !important; 
  border-top: 50vh solid 	lightgray !important; 
  bottom: 0;
  right: 0;
  z-index: -1;
        }
        .triangle2{
          width: 0;
  height: 0;
  border-left: 40vw solid transparent !important; 
  border-bottom: 50vh solid darkgray !important;
  position: absolute;
  bottom: 0;
  right: 0; 
  z-index: -1;
        }
  
        .square{
          width: 24vw !important;
  height: 16vh !important;
  background-color: #e9e9e9;
  border-radius: 30%;  
        }
}



.square:hover .mat-icon-custom2 {
  transform: scale(1.2) translateX(25px);

}
   
        .triangle{
          width: 0;
  height: 0;
  border-right:60vw solid transparent; 
  border-top: 60vh solid 	lightgray; 
  bottom: 0;
  right: 0;
  z-index: -1;
        }
        .triangle2{
          width: 0;
  height: 0;
  border-left: 60vw solid transparent; 
  border-bottom: 70vh solid darkgray;
  position: absolute;
  bottom: 0;
  right: 0; 
  z-index: -1;
        }
  
        .square{
          width: 17vw;
  height: 34vh;
  background-color: #e9e9e9;
  border-radius: 30%;  
        }
       
        .text-content {
  position: relative; 
  z-index: 1; 
}

  </style>

 ` 
})
export class ContantSection {

  

}