import { Component } from '@angular/core';
import { RouterLink,RouterLinkActive } from '@angular/router';
import { AnimationService } from '../animation.service';
import { MatIcon } from '@angular/material/icon';
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,MatIcon,NgClass],

templateUrl: './header.component.html'
})
export class HeaderComponent {
  constructor(private animationService:AnimationService){}

  scrollTo(sectionId:string){
    this.animationService.scrollToSection(sectionId);
  }

  isMenuOpen=false;

  toggleMenu(){
    this.isMenuOpen=!this.isMenuOpen;
  }

}
