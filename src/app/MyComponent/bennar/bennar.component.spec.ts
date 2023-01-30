import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BennarComponent } from './bennar.component';

describe('BennarComponent', () => {
  let component: BennarComponent;
  let fixture: ComponentFixture<BennarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BennarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BennarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
