import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSalaComponent } from './create-sala.component';

describe('CreateSalaComponent', () => {
  let component: CreateSalaComponent;
  let fixture: ComponentFixture<CreateSalaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSalaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
