import { LivestockPage } from './app.po';

describe('livestock App', function() {
  let page: LivestockPage;

  beforeEach(() => {
    page = new LivestockPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
