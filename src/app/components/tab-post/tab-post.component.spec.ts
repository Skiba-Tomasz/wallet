import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabPostComponent } from './tab-post.component';

describe('TabPostComponent', () => {
  let component: TabPostComponent;
  let fixture: ComponentFixture<TabPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
