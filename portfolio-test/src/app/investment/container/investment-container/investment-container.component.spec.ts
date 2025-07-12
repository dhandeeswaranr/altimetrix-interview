import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentContainerComponent } from './investment-container.component';

describe('InvestmentContainerComponent', () => {
  let component: InvestmentContainerComponent;
  let fixture: ComponentFixture<InvestmentContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InvestmentContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvestmentContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
