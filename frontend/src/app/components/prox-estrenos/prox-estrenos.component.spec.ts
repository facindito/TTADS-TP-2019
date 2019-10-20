import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProxEstrenosComponent } from './prox-estrenos.component';

describe('ProxEstrenosComponent', () => {
  let component: ProxEstrenosComponent;
  let fixture: ComponentFixture<ProxEstrenosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProxEstrenosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProxEstrenosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
