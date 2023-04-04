import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {Glass} from "./models/Glass";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  private cart: Glass[] = [];
}
