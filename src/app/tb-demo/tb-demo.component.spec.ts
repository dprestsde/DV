import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TbDemoComponent } from './tb-demo.component';

describe('TbDemoComponent', () => {
  let component: TbDemoComponent;
  let fixture: ComponentFixture<TbDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TbDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TbDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
