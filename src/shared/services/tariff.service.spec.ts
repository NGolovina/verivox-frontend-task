import { TestBed } from '@angular/core/testing';
import { TariffService } from './tariff.service';

describe('FeatureServiceService', () => {

  let tariffService: TariffService;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [
    ],
    providers: [
      TariffService
    ]
  }));

  beforeEach(() => {
    tariffService = TestBed.get(TariffService);
  });

  it('should be created', () => {
    const service: TariffService = TestBed.get(TariffService);
    expect(service).toBeTruthy();
  });

  it('should get features', async () => {
    const tariffOptions = await tariffService.tariffOptions();
    expect(tariffOptions[0].id).toBe('ID-1');
  });
});
