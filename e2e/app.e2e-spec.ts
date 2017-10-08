import { NgCuMoodleLitePage } from './app.po';

describe('ng-cu-moodle-lite App', () => {
  let page: NgCuMoodleLitePage;

  beforeEach(() => {
    page = new NgCuMoodleLitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
