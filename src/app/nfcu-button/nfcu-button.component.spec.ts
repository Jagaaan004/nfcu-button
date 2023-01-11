import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NfcuButtonComponent } from './nfcu-button.component';

describe('NfcuButtonComponent', () => {
  let component: NfcuButtonComponent;
  let fixture: ComponentFixture<NfcuButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NfcuButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NfcuButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
