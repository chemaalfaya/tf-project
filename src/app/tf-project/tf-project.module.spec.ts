import { TfProjectModule } from './tf-project.module';


describe('TfProjectModule', () => {
  let tfProjectModule: TfProjectModule;

  beforeEach(() => {
    tfProjectModule = new TfProjectModule();
  });

  it('should create an instance', () => {
    expect(tfProjectModule).toBeTruthy();
  });
});
