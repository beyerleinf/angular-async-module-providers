import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ConfigService } from './config.service';

describe('ConfigService', () => {
  let service: ConfigService;
  let http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });

    service = TestBed.get(ConfigService);
    http = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    http.verify();
  });

  describe('general', () => {
    it('should be created', () => {
      expect(service).toBeTruthy();
    });
  });

  describe('getBaseUrl', () => {
    it('should load config', done => {
      service.getBaseUrl().subscribe(() => {
        expect().nothing();
        done();
      });

      http.expectOne('/assets/config.json').flush({ baseUrl: 'MyBase' });
    });

    it('should use correct http method', done => {
      service.getBaseUrl().subscribe(() => {
        expect().nothing();
        done();
      });

      const req = http.expectOne('/assets/config.json');
      req.flush({ baseUrl: 'MyBase' });

      expect(req.request.method).toBe('GET');
    });

    it('should return base URL', done => {
      service.getBaseUrl().subscribe(res => {
        expect(res).toBe('MyBase');
        done();
      });

      const req = http.expectOne('/assets/config.json');
      req.flush({ baseUrl: 'MyBase' });
    });

    it('should set baseUrl', done => {
      service.getBaseUrl().subscribe(() => {
        expect(service.baseUrl).toBe('MyBase');
        done();
      });

      const req = http.expectOne('/assets/config.json');
      req.flush({ baseUrl: 'MyBase' });
    });
  });
});
