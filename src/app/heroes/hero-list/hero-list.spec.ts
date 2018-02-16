import {} from 'jasmine';
import { TestBed } from '@angular/core/testing';

import { HeroListComponent } from './hero-list';

describe('HeroListComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ declarations: [HeroListComponent] });
  });

  it('should work', () => {
    let fixture = TestBed.createComponent(HeroListComponent);
    expect(fixture.componentInstance instanceof HeroListComponent).toBe(
      true,
      'should create HeroListComponent'
    );
  });
});
