import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AppStoreComponent } from './app-store.component';

describe('AppStoreComponent', () => {
  let component: AppStoreComponent;
  let fixture: ComponentFixture<AppStoreComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AppStoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
