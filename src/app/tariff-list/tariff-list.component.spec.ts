import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TariffListComponent } from './tariff-list.component';
import {MatButtonModule, MatSortModule} from '@angular/material';
import {MatTableModule} from '@angular/material';
import {RouterTestingModule} from '@angular/router/testing';
import {TariffService} from '../../shared/services/tariff.service';
import {instance, mock, when} from 'ts-mockito';
import {HAMMER_LOADER} from '@angular/platform-browser';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {DataModel} from '../../shared/data.mock';

const testDataSet: Array<DataModel> = [
  {
    id: 'ID-1',
    tariffName: 'Tarif 1',
    downloadSpeed: 12,
    uploadSpeed: 6,
    tariffBenefit: ['Tariff Benefit 1', 'Tariff Benefit 2', 'Tariff Benefit 3'],
    price: 123
  },
  {
    id: 'ID-1',
    tariffName: 'Tarif 2',
    downloadSpeed: 15,
    uploadSpeed: 9,
    tariffBenefit: ['Tariff Benefit 1', 'Tariff Benefit 2', 'Tariff Benefit 3'],
    price: 134
  }
];

describe('TariffListComponent', () => {
  let component: TariffListComponent;
  let fixture: ComponentFixture<TariffListComponent>;
  let element: HTMLElement;

  beforeEach(async(() => {

    const tariffServiceMock = mock(TariffService);
    when(tariffServiceMock.tariffOptions()).thenResolve(testDataSet);

    TestBed.configureTestingModule({
      declarations: [ TariffListComponent ],
      imports: [
        MatTableModule,
        MatButtonModule,
        MatSortModule,
        RouterTestingModule,
        NoopAnimationsModule,
      ],
      providers: [
        {provide: TariffService, useFactory: () => instance(tariffServiceMock)},
        {
          provide: HAMMER_LOADER, useValue: () => new Promise(() => {
          })
        }
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(TariffListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    element = fixture.debugElement.nativeElement;
  }));

  it('should create', async () => {
    expect(component).toBeTruthy();
  });

  it('should create', async () => {
    fixture.detectChanges();

    const displayedValues = getAllDisplayedItemValues(element);

    console.log(displayedValues);

    expect(displayedValues[0].tariffName).toEqual('1. Tarif 1');
    expect(displayedValues[0].downloadSpeed).toEqual('12 Mbit/s');
    expect(displayedValues[0].uploadSpeed).toEqual('6 Mbit/s');
    expect(displayedValues[0].price).toEqual('€123.00');

    expect(displayedValues[1].tariffName).toEqual('2. Tarif 2');
    expect(displayedValues[1].downloadSpeed).toEqual('15 Mbit/s');
    expect(displayedValues[1].uploadSpeed).toEqual('9 Mbit/s');
    expect(displayedValues[1].price).toEqual('€134.00');
  });
});

function getAllDisplayedItemValues(sourceElement: HTMLElement): any[] {
  const values = [];
  const rows = sourceElement.querySelectorAll('tbody > tr');
  rows.forEach(row => {
    const columns = row.querySelectorAll('td');
    values.push({
      tariffName: columns[0].innerText,
      downloadSpeed: columns[1].querySelector('.download-container__download-speed').innerHTML,
      uploadSpeed: columns[1].querySelector('.upload-container__upload-speed').innerHTML,
      price: columns[4].querySelector('.price-container__price').innerHTML
    });
  });
  return values;
}
