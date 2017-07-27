import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDressComponent } from './new-dress.component';

describe('NewDressComponent', () => {
  let component: NewDressComponent;
  let fixture: ComponentFixture<NewDressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewDressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
