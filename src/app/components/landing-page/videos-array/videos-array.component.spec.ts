import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosArrayComponent } from './videos-array.component';

describe('VideosArrayComponent', () => {
  let component: VideosArrayComponent;
  let fixture: ComponentFixture<VideosArrayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideosArrayComponent]
    });
    fixture = TestBed.createComponent(VideosArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
