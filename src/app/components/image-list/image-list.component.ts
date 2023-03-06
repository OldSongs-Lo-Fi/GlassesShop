import {Component, OnInit} from '@angular/core';
import {Glass} from "../../models/Glass";
import {GlassService} from "../../services/glass.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit{

  public glasses: Glass[] = [];

  constructor(private glassService: GlassService){}

  public updateData(): void{
    this.glassService.getGlasses().subscribe(
      (response:Glass[]) => {
        //Connection process
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
      }
    );
  }

  public getGlasses(): Glass[]{
    return this.glasses;
  }

  ngOnInit(): void {
    //Updating Data on load
    this.updateData();
  }
}
