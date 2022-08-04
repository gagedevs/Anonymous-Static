
var get = a => localStorage.getItem(a)
var set = (a, b) => localStorage.setItem(a, b)
document.title = get('title') || 'Anonymous'
var link = document.createElement('link');
link.rel = 'icon';
document.getElementsByTagName('head')[0].appendChild(link);
function faviconChange(value) {
  set('link', value)
  link.href = get('link') || '/img/favicon.ico';
  console.log("working " + link.href)
}
link.href = get('link') || '/img/favicon.ico';