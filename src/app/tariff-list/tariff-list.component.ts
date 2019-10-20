import {Component, OnInit, ViewChild} from '@angular/core';
import {TariffService} from '../../shared/services/tariff.service';
import {DataModel} from '../../shared/data.mock';
import { MatSort } from '@angular/material';
import { MatTableDataSource } from '@angular/material/';

@Component({
  selector: 'app-tariff-list',
  templateUrl: './tariff-list.component.html',
  styleUrls: ['./tariff-list.component.scss']
})
export class TariffListComponent implements OnInit {

  tariffOptions: Array<DataModel>;
  dataSource: MatTableDataSource<DataModel> | null = null;
  readonly displayedColumns: string[] = ['tariffName', 'downloadSpeed', 'uploadSpeed', 'tariffBenefit', 'price'];

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private tariffService: TariffService) { }

  async ngOnInit() {
    this.dataSource = this.initMatTableDataSource();
    try {
      this.tariffOptions = await this.tariffService.tariffOptions();
      this.dataSource.data = await this.tariffService.tariffOptions();
      console.log(this.dataSource.data);
    } catch (e) {}
  }

  private initMatTableDataSource(): MatTableDataSource<DataModel> {
    const dataSource = new MatTableDataSource<DataModel>([]);
    dataSource.sort = this.sort;
    return dataSource;
  }

  public getPosition(row: object): string {
    const position =  Object.keys(this.dataSource.data).find(key => this.dataSource.data[key] === row);
    return (parseInt(position, 0) + 1).toString() + '.';
  }
}
