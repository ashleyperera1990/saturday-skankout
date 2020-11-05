import { Component, OnInit } from '@angular/core';
import {DjService} from '../../services/dj.service';
import {ResidentDj} from '../../models/resident-dj.model';

@Component({
  selector: 'app-resident-djs',
  templateUrl: './resident-djs.component.html',
  styleUrls: ['./resident-djs.component.css']
})
export class ResidentDjsComponent implements OnInit {

  djList: ResidentDj[];

  constructor(private djService: DjService) { }

  ngOnInit(): void {
    this.djService.getAllDJs().subscribe(res => {
      this.djList = res;
    })
  }

}
