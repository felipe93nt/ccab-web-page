import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesUserComponent } from './detalhes-user.component';

describe('DetalhesUserComponent', () => {
  let component: DetalhesUserComponent;
  let fixture: ComponentFixture<DetalhesUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalhesUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
