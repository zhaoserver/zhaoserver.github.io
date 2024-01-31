const defaultLang = 'en-us'

hexo.extend.helper.register('url_for_lang', function (path) {
  const l = this.page.lang
  const lang = (!l || l.startsWith(':')) ? defaultLang : l;
  const url = this.url_for(path);
  if (url.startsWith('/')) return `/${lang}${url}`
  return url;
});

hexo.extend.helper.register('pages_auto_filter', function (path) {
  const { site, page } = this
  const { data } = site.pages
  const { lang: l, filter } = page
  const lang = (!l || l.startsWith(':')) ? defaultLang : l;
  const pages = data.filter(({ type, path }) => type == filter && path.startsWith(lang))
  return pages.sort((a, b) => a.sort - b.sort)
});

hexo.extend.helper.register('stringify', function (data) {
  return JSON.stringify(data, (key, value) => ['prev', 'next'].includes(key) ? {} : value, 2)
});
