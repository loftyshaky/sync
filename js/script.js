const url = new URL(location.href);
const locale = url.searchParams.get('hl');
const success = Boolean(+url.searchParams.get('success'));

(() => {
    let el_cls = 'success';

    if (!success) {
        el_cls = 'error';
    }

    x.add_cls(document.body, el_cls);
    x.remove_cls(s(`.msg.${el_cls}`), 'none');
})();

(() => {
    const locale_script = x.create('script', '');
    locale_script.setAttribute('src', `js/locales/${locale}.js`);
    x.append(document.body, locale_script);

    locale_script.addEventListener('load', () => {
        const elements = sa('[data-text]');

        for (const element of elements) {
            element.textContent = messages[element.dataset.text];
        }
    });
})();