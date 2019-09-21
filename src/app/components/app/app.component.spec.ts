import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BASE_API_URL_TOKEN } from 'src/app/injectors';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [{ provide: BASE_API_URL_TOKEN, useValue: 'MyBase' }],
    });

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  describe('general', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });
});
