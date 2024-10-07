import { Component } from '@angular/core';
import { AnimationService } from '../animation.service';

@Component({
  selector: 'app-home-about-section',
  standalone: true,
  imports: [],
  template: `<div id="section1" class="mt-48  sm:mt-40 bg-gray-400 fade-in pb-16 ">
  <p  class="fade-in font-serif float-left text-3xl sm:text-5xl  ml-8 sm:ml-28  mt-6 text-gray-600 mb-8">about.</p>
  <p   class=" fade-in clear-left text-left ml-20 sm:ml-36 font-serif text-lg sm:text-2xl  w-3/4    text-white">My name is Filip and I am currently a computer science student in Poznań. My greatest passion is programming. I started by creating simple websites in html and css. Then I learned javascript and typescript, currently I create my projects in the Angular framework and 
    I spend a lot of time learning Java. 
    I created designs or graphics for my websites myself in Adobe programs because I have the title of graphic technician. 
    I already have my first experience in programming because I participated in creating a website for a certain store. I also have other projects. I have been interested in programming for over two years. I am a communicative, creative person and I like working in a team. I avoid conflicts and always look for a solution to a given problem.
     Apart from programming, I do a lot of sports such as running or long hikes. I also like reading biographies..</p>
   </div> ` 
})
export class HomeAboutSectionComponent {

 

}
