import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EshopComponent } from './eshop.component';

describe('EshopComponent', () => {
  let component: EshopComponent;
  let fixture: ComponentFixture<EshopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EshopComponent]
    });
    fixture = TestBed.createComponent(EshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
