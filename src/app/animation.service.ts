import { Injectable } from "@angular/core";
import { ViewportScroller } from "@angular/common";


@Injectable({
  providedIn:'root'
})
export class AnimationService{

  constructor(private viewportScroller:ViewportScroller){}

  scrollToSection(sectionId:string){
    setTimeout(()=>{
      const element=document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    },50)
   
  }

addFadeAnimation(selector: string,fadeInClass:string,showClass:string){
  const elements=document.querySelectorAll(selector);
  const obesrver=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
       (entry.target as HTMLElement).classList.add(showClass);
       obesrver.unobserve(entry.target);
      }
    })
  });
elements.forEach(element=>{
  (element as HTMLElement).classList.add(fadeInClass);
  obesrver.observe(element);
})

}

}