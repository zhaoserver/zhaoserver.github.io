const defaultLang = 'en-us'

const langs = {
  'zh-cn': '简体中文',
  'en-us': 'English',
}

const full_url_for = hexo.extend.helper.get('full_url_for').bind(hexo);

hexo.extend.helper.register('lang_name', function (l) {
  const lang = (!l || l.startsWith(':')) ? defaultLang : l;
  return langs[lang]
});

hexo.extend.helper.register('canonical_url', function (lang) {
  const { canonical_path } = this.page;
  return full_url_for(`${lang}/${canonical_path}`);
});