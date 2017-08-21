import { LivroAngularPage } from './app.po';

describe('livro-angular App', function() {
  let page: LivroAngularPage;

  beforeEach(() => {
    page = new LivroAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
