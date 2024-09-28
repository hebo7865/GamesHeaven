import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { BlankNavbarComponent } from "../blank-navbar/blank-navbar.component";

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [FooterComponent, BlankNavbarComponent],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss'
})
export class NotFoundComponent {

}
