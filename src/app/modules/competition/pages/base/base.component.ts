import { Component } from '@angular/core';
import {SideBarComponent} from "../../components/side-bar/side-bar.component";
import {CompetitionNavComponent} from "../../components/competition-nav/competition-nav.component";
import {TableComponent} from "../../../../shared/components/table/table.component";
import {GlobalPaginationComponent} from "../../../../shared/components/global-pagination/global-pagination.component";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-base',
  standalone: true,
  imports: [
    SideBarComponent,
    CompetitionNavComponent,
    RouterOutlet
  ],
  templateUrl: './base.component.html',
  styleUrl: './base.component.css'
})
export class BaseComponent {

}
