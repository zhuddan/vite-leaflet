import type { App } from 'vue';

import { Icon } from '@/components/Icon';
import { AppLink, AppTitle } from '@/components/App';

const globComp = [Icon, AppLink, AppTitle];

export function registerGlobComp(app: App) {
  for (let index = 0; index < globComp.length; index++) {
    const element = globComp[index];
    app.component(element.name, element);
  }
}
