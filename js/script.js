const url = new URL(location.href);
const success_param = url.searchParams.get('success');
const redirected_by_app = typeof success_param === 'string';

if (redirected_by_app) {
    (() => {
        const success = Boolean(+success_param);
        let el_cls = 'success';

        if (!success) {
            el_cls = 'error';
        }

        x.add_cls(document.body, el_cls);
        x.remove_cls(s(`.msg.${el_cls}`), 'none');
    })();

    (() => {
        const locale = url.searchParams.get('hl');
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
}