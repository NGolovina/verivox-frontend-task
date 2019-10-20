
export interface DataModel {
  id: string;
  tariffName: string;
  downloadSpeed: number;
  uploadSpeed: number;
  tariffBenefit: string[];
  price: number;
}

const dataSet: Array<DataModel> = [
  {
    id: 'ID-1',
    tariffName: 'Tarif 1',
    downloadSpeed: 12,
    uploadSpeed: 6,
    tariffBenefit: ['Tariff Benefit 1', 'Tariff Benefit 2', 'Tariff Benefit 3'],
    price: 123
  },
  {
    id: 'ID-2',
    tariffName: 'Tarif 2',
    downloadSpeed: 15,
    uploadSpeed: 9,
    tariffBenefit: ['Tariff Benefit 1', 'Tariff Benefit 2', 'Tariff Benefit 3'],
    price: 134
  },
  {
    id: 'ID-3',
    tariffName: 'Tarif 3',
    downloadSpeed: 120,
    uploadSpeed: 5,
    tariffBenefit: ['Tariff Benefit 1', 'Tariff Benefit 2', 'Tariff Benefit 3'],
    price: 12
  },
  {
    id: 'ID-4',
    tariffName: 'Tarif 4',
    downloadSpeed: 12,
    uploadSpeed: 1,
    tariffBenefit: ['Tariff Benefit 1', 'Tariff Benefit 2', 'Tariff Benefit 3'],
    price: 23
  },
];

export class DataMock {
  static data: Promise<DataModel[]> = new Promise<any>((resolve, reject) => {
    setTimeout(() => {
      resolve(dataSet);
      reject(new Error('error'));
    }, 2000);
  });
}
