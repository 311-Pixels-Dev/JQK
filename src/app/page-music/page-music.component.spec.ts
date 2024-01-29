import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMusicComponent } from './page-music.component';

describe('PageMusicComponent', () => {
  let component: PageMusicComponent;
  let fixture: ComponentFixture<PageMusicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageMusicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageMusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
