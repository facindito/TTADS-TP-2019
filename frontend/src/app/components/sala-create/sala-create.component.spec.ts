import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaCreateComponent } from './sala-create.component';

describe('SalaCreateComponent', () => {
  let component: SalaCreateComponent;
  let fixture: ComponentFixture<SalaCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalaCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
