import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabPostContentComponent } from './tab-post-content.component';

describe('TabPostContentComponent', () => {
  let component: TabPostContentComponent;
  let fixture: ComponentFixture<TabPostContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabPostContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabPostContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
