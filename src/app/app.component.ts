import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header-nav/header.component";
import { RouterLink, RouterLinkActive, Router } from "@angular/router";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  
})
export class AppComponent {
  
  title = 'own-website';
}
