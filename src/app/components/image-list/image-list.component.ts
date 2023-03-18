import {Component, OnInit} from '@angular/core';
import {Glass} from "../../models/Glass";
import {GlassService} from "../../services/glass.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent {

  public glasses: Glass[] = [];

  constructor(private glassService: GlassService){
    this.updateData();
  }

  public updateData(): void{
    this.glassService.getGlasses().subscribe(
      (response:Glass[]) => {
        this.glasses = response;
      },
      (error: HttpErrorResponse) => {
        //Connection error
        alert("Connection error!");
        console.log(error.message);
        return;
      },
      () => {
        //After Successfully Connection!
        console.log("Connection was Successfully!");
        console.log(this.glasses);
      }
    );
  }

  public getGlasses(): Glass[]{
    return this.glasses;
  }
}
