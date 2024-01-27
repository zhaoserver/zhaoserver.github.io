$(function () {
  'use strict';
  function changeLang() {
    // var lang = this.value;
    // var canonical = this.dataset.canonical;
    // var path = '/';
    // if (lang !== 'en') path += lang + '/';

    // location.href = path + canonical;
  }
  document.getElementById('lang-select').addEventListener('change', function () {
    var lang = this.value;
    var canonical = this.dataset.canonical;
    location.href = '/' + lang + '/' + canonical

  });
});