import { Ng2CoreTemplatePage } from './app.po';

describe('ng2-core-template App', function() {
  let page: Ng2CoreTemplatePage;

  beforeEach(() => {
    page = new Ng2CoreTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
