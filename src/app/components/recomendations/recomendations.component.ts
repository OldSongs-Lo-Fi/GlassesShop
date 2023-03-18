import {Component, OnInit} from '@angular/core';
import {GlassService} from "../../services/glass.service";
import {Glass} from "../../models/Glass";
import {Observable} from "rxjs";

@Component({
  selector: 'app-recomendations',
  templateUrl: './recomendations.component.html',
  styleUrls: ['./recomendations.component.css']
})
export class RecomendationsComponent implements OnInit{

  public recomendatedGlasses: Glass[] = [];
  constructor(private glassService: GlassService) {
  }
  ngOnInit(): void {
    this.glassService.getGlasses().subscribe((array) => {
      const length = array.length;
      for (let i = 0; i < 5; i++) {
        const glassObservable: Observable<Glass> = this.glassService.getGlass(this.getRandomInt(1, length));
        glassObservable.subscribe((value) => {
          this.recomendatedGlasses.push(value);
        })
      }
    });
  }

  getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
