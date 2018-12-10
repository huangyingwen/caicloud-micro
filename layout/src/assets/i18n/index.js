// Copyright 2017 caicloud authors. All rights reserved.

import * as zh_cn from './zh-cn/index.js';
import * as en from './en/index.js';
import { i18n } from 'caicloud-i18n';

export { i18n, get, init } from 'caicloud-i18n';

i18n.setLang({
  'zh-cn': zh_cn,
  en,
});
