import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsesComponentComponent } from './responses-component.component';

describe('ResponsesComponentComponent', () => {
  let component: ResponsesComponentComponent;
  let fixture: ComponentFixture<ResponsesComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResponsesComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
