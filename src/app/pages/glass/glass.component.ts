import {Component, OnInit} from '@angular/core';
import {Glass} from "../../models/Glass";
import {GlassService} from "../../services/glass.service";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: 'app-glass',
  templateUrl: './glass.component.html',
  styleUrls: ['./glass.component.css']
})
export class GlassComponent implements OnInit{

  public glassId: any;
  public currentGlass: any;


  constructor(private glassService: GlassService,
              private activatedRoute: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.glassId = this.activatedRoute.snapshot.paramMap.get("id");
    console.log(`start of loggin of glass###########`)
    console.log(`id: ${this.glassId}`);

    let obsGlass = this.glassService.getGlass(this.glassId);
    obsGlass.subscribe(resp => {
      // Extract the value from the emitted event
      console.log(resp.size);
      this.currentGlass = resp;

    });


  }
}
