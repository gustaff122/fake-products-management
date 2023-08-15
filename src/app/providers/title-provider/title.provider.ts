import { RouterStateSnapshot, TitleStrategy } from '@angular/router';
import { Injectable, Provider } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable()
export class TitleProvider extends TitleStrategy {

  constructor(
    private readonly title: Title,
  ) {
    super();
  }

  public override updateTitle(routerStateSnapshot: RouterStateSnapshot): void {
    const title = this.buildTitle(routerStateSnapshot);

    if (title) {
      this.title.setTitle(`${title}: Fake Products Management`);
    } else {
      this.title.setTitle('Fake Products Management');
    }
  }
}

export const titleProvider: Provider = {
  provide: TitleStrategy,
  useClass: TitleProvider,
};