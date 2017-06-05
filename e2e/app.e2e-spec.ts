import { UniAng2Page } from './app.po';

describe('uni-ang2 App', function() {
  let page: UniAng2Page;

  beforeEach(() => {
    page = new UniAng2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
