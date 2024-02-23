import { Component } from '@angular/core';
import {PaginationComponent} from "../../../../shared/components/pagination/pagination.component";

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [
    PaginationComponent
  ],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {

}
