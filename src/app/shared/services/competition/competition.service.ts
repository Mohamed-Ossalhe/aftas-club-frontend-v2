import { Injectable } from '@angular/core';
import {AbstractService} from "../abstract.service";
import {Competition} from "../../../core/models/competition";

@Injectable({
  providedIn: 'root'
})
export class CompetitionService extends AbstractService<Competition>{

  constructor() {
    super();
  }
}
