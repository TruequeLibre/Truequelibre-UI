import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TruequelibreUiComponent } from './truequelibre-ui.component';

describe('TruequelibreUiComponent', () => {
  let component: TruequelibreUiComponent;
  let fixture: ComponentFixture<TruequelibreUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TruequelibreUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TruequelibreUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
