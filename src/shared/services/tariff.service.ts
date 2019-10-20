import {Injectable} from '@angular/core';
import {DataMock, DataModel} from '../data.mock';



@Injectable({
  providedIn: 'root'
})

export class TariffService {

  constructor() {
  }

  tariffOptions(): Promise<DataModel[]> {
    return DataMock.data;
  }
}
