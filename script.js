/* SmartStock — Landing Page
   Idioma (en_US por defecto, es_419), enlaces a la aplicación web, menú,
   preguntas frecuentes y validación del formulario. */

/* URL de la aplicación web. Al desplegarla, se cambia solo esta línea. */
var APP_URL = 'http://localhost:4200';

var APP_ROUTES = {
    signup: '/sign-up',
    signupCorner: '/sign-up?segment=corner-store',
    signupMini: '/sign-up?segment=minimarket',
    signupStarter: '/sign-up?plan=starter',
    signupGrowth: '/sign-up?plan=growth'
};

/* El texto en inglés vive en el HTML; aquí solo va la traducción. Si este
   archivo no carga, la página se sigue leyendo completa en inglés. */
var ES = {
    title: 'SmartStock — Monitoreo de inventario con sensores IoT para minimarkets y bodegas',
    desc: 'SmartStock monitorea tu inventario físico con sensores de peso IoT, lo compara con tu stock registrado y te avisa antes de que un producto se agote.',
    navAria: 'Navegación principal',
    languageAria: 'Selector de idioma',
    skip: 'Ir al contenido principal',
    openMenu: 'Abrir el menú de navegación',

    navUses: 'Casos de uso',
    navCompare: 'Comparación',
    navPlans: 'Planes',
    navFaq: 'Preguntas',
    signUp: 'Crear cuenta',

    heroImageAlt: 'Dueño de una Bodega de barrio o administrador de un Minimarket junto a estantes con productos mientras utiliza SmartStock para monitorear el inventario.',
    heroKicker: 'Monitorea tu tienda con SmartStock',
    heroTitle: 'Conoce lo que hay realmente en tus estantes',
    heroLead: 'Los conteos manuales nunca coinciden con el estante. SmartStock lee tu inventario físico con sensores de peso IoT, lo compara con tu stock registrado y te avisa antes de que un producto se agote.',
    heroCta: 'Empezar prueba gratuita',
    heroDemo: 'Solicitar demostración',
    heroNote: 'Sin tarjeta · Instalación en menos de un día',

    probTitle: 'Contar a mano te cuesta ventas',
    probLead: 'En la mayoría de bodegas y minimarkets, el control de stock todavía depende de conteos periódicos que no reflejan lo que hay en el estante ahora mismo.',
    prob1: 'Quiebres de stock que notas tarde',
    prob1Text: 'Para cuando alguien ve el estante vacío, la venta ya se perdió.',
    prob2: 'Registros que no coinciden con la realidad',
    prob2Text: 'Las mermas y los errores de conteo abren una diferencia que nadie detecta hasta el siguiente inventario.',
    prob3: 'Horas revisando estantes',
    prob3Text: 'El tiempo del personal se va en recorrer los pasillos en vez de atender a los clientes.',

    usesTitle: 'Adaptado a la forma en que opera tu negocio',
    cornerTag: 'Bodegas de barrio',
    cornerTitle: 'Para una tienda donde el dueño atiende el mostrador',
    corner1: 'Monitorea los productos de mayor rotación en tu bodega.',
    corner2: 'Recibe la alerta de stock bajo por WhatsApp, sin necesitar una computadora.',
    corner3: 'No necesitas lectores de código de barras ni integrarte con tu punto de venta.',
    cornerCta: 'Crear mi cuenta de bodega',
    miniTag: 'Minimarkets',
    miniTitle: 'Para una tienda con personal, turnos y mayor volumen',
    mini1: 'Compara el stock físico con el registrado en todo tu catálogo.',
    mini2: 'Visualiza en un dashboard qué productos están bajos, normales o sin sensor asignado.',
    mini3: 'Recibe alertas automáticas cuando la diferencia supera el 10%.',
    miniCta: 'Crear mi cuenta de minimarket',

    cmpTitle: 'Cómo se compara SmartStock',
    cmpLead: 'La mayoría de plataformas de inventario fueron diseñadas para cadenas de supermercados.',
    cmpCaption: 'Comparación de SmartStock frente a plataformas de escaneo de estantes y software de inventario tradicional',
    cmpCol0: 'Capacidad',
    cmpCol2: 'Escaneo de estantes',
    cmpCol3: 'Software tradicional',
    yes: 'Sí',
    no: 'No',
    cmpRow1: 'Lee el stock físico automáticamente',
    cmpRow2: 'Funciona sin integración con el punto de venta',
    cmpRow3: 'Accesible para una sola tienda',
    cmpRow4: 'Alertas por WhatsApp',
    cmpRow5: 'Tiempo de instalación',
    cmpFast: 'Menos de un día',
    cmpWeeks: 'Semanas',
    cmpDays: 'Días',

    plansTitle: 'Planes que crecen con tu tienda',
    plansLead: 'Por tienda, por mes. Los sensores se cobran una sola vez.',
    perMonth: '/ mes',
    p1Name: 'Inicial',
    p1f1: 'Hasta 20 productos monitoreados',
    p1f2: 'Alertas por correo electrónico',
    p1f3: 'Panel de monitoreo en tiempo real',
    p1Cta: 'Elegir Inicial',
    p2Name: 'Crecimiento',
    p2f1: 'Hasta 120 productos monitoreados',
    p2f2: 'Alertas por correo electrónico y WhatsApp',
    p2f3: 'Comparación entre físico y registrado',
    p2f4: 'Dashboard de inventario',
    p2Cta: 'Elegir Crecimiento',
    p3Name: 'Business',
    p3f1: 'Productos monitoreados ilimitados',
    p3f2: 'Varias tiendas en una cuenta',
    p3f3: 'Acceso completo al API',
    p3Cta: 'Hablar con ventas',

    testEyebrow: 'EXPERIENCIAS DE NUESTROS USUARIOS',
    testLead: 'Historias de pequeños comercios que buscan controlar mejor su inventario.',
    stars5: '5 estrellas',
    testTitle: 'Lo que dicen los dueños de tienda',
    test1: 'Antes me enteraba de que el arroz se había acabado cuando un cliente lo pedía. Ahora la alerta me llega por WhatsApp y hago el pedido esa misma mañana.',
    test1Role: 'Dueña de bodega, San Martín de Porres',
    test2: 'La comparación entre lo que dice el sistema y lo que hay en el estante nos mostró una diferencia que veníamos arrastrando meses.',
    test2Role: 'Administrador de minimarket, Los Olivos',
    test3: 'Colocar los sensores nos tomó una tarde. No tuve que cambiar nada de cómo ya trabajamos.',
    test3Role: 'Dueña de bodega, Comas',

    faqTitle: 'Preguntas sobre la instalación de los sensores',
    q1: '¿Necesito un electricista para instalarlos?',
    a1: 'No. Cada sensor es una bandeja que se apoya en el estante, se conecta a tu red Wi-Fi y se enchufa a un tomacorriente común. Lo vinculas a un producto desde el panel.',
    q2: '¿Qué pasa si se cae mi conexión a internet?',
    a2: 'El panel marca el sensor como desconectado tras cinco minutos sin una nueva lectura, de modo que siempre sabes si lo que ves está vigente.',
    q3: '¿Un sensor sirve para varios productos?',
    a3: 'No. Cada sensor se vincula a un solo producto, porque la lectura es un peso y mezclar productos haría imposible saber cuál bajó.',
    q4: '¿Puedo mover un sensor a otro producto?',
    a4: 'Sí. Lo desvinculas desde el panel y lo vinculas al nuevo producto, que registra un nuevo peso de referencia. El historial anterior se conserva.',

    contactTitle: 'Ve SmartStock en tus propios estantes',
    contactLead: 'Déjanos tus datos y coordinamos una demostración.',
    fName: 'Nombre completo',
    fBusiness: 'Nombre del negocio',
    fEmail: 'Correo electrónico',
    fSegment: 'Tipo de negocio',
    fCorner: 'Bodega de barrio',
    fMini: 'Minimarket',
    fSubmit: 'Solicitar demostración',

    copyright: '© 2026 NexoStock · SmartStock',
    terms: 'Términos y condiciones',
    backHome: 'Volver al inicio',

    required: 'Este campo es obligatorio.',
    badEmail: 'Ingresa un correo electrónico válido.',
    sent: 'Recibimos tu solicitud. Te enviamos una confirmación al correo que ingresaste.',
    failed: 'Revisa los campos marcados e inténtalo nuevamente.',

    termsTitle: 'Términos y condiciones de servicio',
    termsUpdated: 'Última actualización: setiembre de 2026',
    termsIntro: 'Estos términos regulan el uso de SmartStock, la plataforma de monitoreo de inventario operada por NexoStock. Al crear una cuenta o instalar un sensor aceptas lo que está escrito a continuación.',
    t1: '1. El servicio',
    t1Text: 'SmartStock lee el peso de los productos que monitoreas mediante sensores IoT, lo convierte en un nivel de stock estimado, lo compara con la cantidad que registras y te notifica cuando un producto alcanza el umbral mínimo o cuando la diferencia supera el diez por ciento. La estimación en unidades es un apoyo a la decisión, no un registro legal de inventario.',
    t2: '2. Cuentas y uso responsable',
    t2Text: 'Eres responsable de la exactitud de los datos que registras y de mantener la confidencialidad de tus credenciales. Podemos suspender una cuenta que se use para atacar el servicio, para acceder a datos de otro negocio o de una forma que infrinja la ley aplicable.',
    t3: '3. Tus datos',
    t3Text: 'Las lecturas de los sensores, el catálogo y las cantidades registradas pertenecen a tu negocio. Los procesamos para prestar el servicio y no los vendemos a terceros. Puedes solicitar su exportación o su eliminación en cualquier momento.',
    t4: '4. Notificaciones',
    t4Text: 'Las alertas se envían por el canal que configures. Su entrega depende de servicios de terceros y de tu conectividad, por lo que no garantizamos que cada notificación llegue de forma instantánea. SmartStock no reemplaza la supervisión de tu inventario.',
    t5: '5. Planes y cancelación',
    t5Text: 'Los planes se facturan mensualmente por tienda y los sensores una sola vez. Puedes cancelar en cualquier momento, con efecto al término del periodo ya pagado, sin penalidad. Un cambio de precio se anuncia con treinta días de anticipación.',
    t6: '6. Accesibilidad e inclusión',
    t6Text: 'La interfaz está disponible en inglés y español latinoamericano, admite navegación por teclado y tecnologías de asistencia, y respeta la preferencia de movimiento reducido del sistema. Si encuentras una barrera que te impide usar el producto, la tratamos como un defecto.',
    t7: '7. Compromiso ético',
    t7Text: 'NexoStock desarrolla SmartStock siguiendo los principios del Código de Ética y Práctica Profesional de Ingeniería de Software de ACM/IEEE y del código de ética del Colegio de Ingenieros del Perú: actuar en interés del cliente y del público, declarar con honestidad qué hace y qué no hace el producto, no exagerar la precisión de una estimación de peso, proteger la confidencialidad de la información y mantener el producto entregado.',
    t8: '8. Contacto',
    t8Text: 'Para consultas sobre estos términos, sobre tus datos o sobre accesibilidad, escríbenos desde el formulario de la página de inicio.'
};

var EN_FALLBACK = {
    required: 'This field is required.',
    badEmail: 'Enter a valid email address.',
    sent: 'We received your request. A confirmation was sent to the address you entered.',
    failed: 'Check the highlighted fields and try again.'
};

var locale = 'en-US';
var original = new WeakMap();

function say(key) {
    return locale === 'es-419' && ES[key] ? ES[key] : EN_FALLBACK[key] || '';
}

function setLocale(next) {
    locale = next;
    document.documentElement.lang = next;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
        var attr = el.getAttribute('data-i18n-attr');
        if (!original.has(el)) {
            original.set(el, attr ? el.getAttribute(attr) : el.innerHTML);
        }
        var key = el.getAttribute('data-i18n');
        var text = next === 'es-419' && ES[key] ? ES[key] : original.get(el);
        if (attr) {
            el.setAttribute(attr, text);
        } else {
            el.innerHTML = text;
        }
    });

    if (next === 'es-419' && ES.title) {
        document.title = ES.title;
    }

    document.querySelectorAll('.lang button').forEach(function (b) {
        b.setAttribute('aria-pressed', String(b.dataset.lang === next));
    });

    try {
        localStorage.setItem('smartstock.lang', next);
    } catch (e) {
        /* Navegación privada: recordar el idioma es una comodidad, no puede
           tumbar la página. */
    }
}

function initialLocale() {
    var saved = null;
    try {
        saved = localStorage.getItem('smartstock.lang');
    } catch (e) { /* ver setLocale */ }
    if (saved === 'es-419' || saved === 'en-US') return saved;
    /* Requisito del curso: English (en_US) es el idioma por defecto. */
    return 'en-US';
}

document.addEventListener('DOMContentLoaded', function () {
    setLocale(initialLocale());

    document.querySelectorAll('.lang button').forEach(function (b) {
        b.addEventListener('click', function () {
            setLocale(b.dataset.lang);
        });
    });

    document.querySelectorAll('[data-app]').forEach(function (a) {
        var route = APP_ROUTES[a.dataset.app];
        if (route) a.href = APP_URL + route;
    });

    var menu = document.getElementById('menu');
    var nav = document.getElementById('nav');
    if (menu && nav) {
        var narrow = window.matchMedia('(max-width: 720px)');
        var sync = function () {
            nav.hidden = narrow.matches && menu.getAttribute('aria-expanded') !== 'true';
        };
        menu.addEventListener('click', function () {
            var open = menu.getAttribute('aria-expanded') === 'true';
            menu.setAttribute('aria-expanded', String(!open));
            nav.hidden = open;
        });
        narrow.addEventListener('change', sync);
        sync();
    }

    document.querySelectorAll('.faq button').forEach(function (b) {
        b.addEventListener('click', function () {
            var open = b.getAttribute('aria-expanded') === 'true';
            b.setAttribute('aria-expanded', String(!open));
            document.getElementById(b.getAttribute('aria-controls')).hidden = open;
        });
    });

    var form = document.getElementById('demo');
    if (!form) return;

    var status = document.getElementById('status');
    var fields = form.querySelectorAll('input[required]');

    function check(input) {
        var error = document.getElementById(input.id + 'Error');
        var value = input.value.trim();
        var problem = '';

        if (value === '') {
            problem = say('required');
        } else if (input.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
            problem = say('badEmail');
        }

        error.textContent = problem;
        if (problem) {
            input.setAttribute('aria-invalid', 'true');
        } else {
            input.removeAttribute('aria-invalid');
        }
        return !problem;
    }

    /* Al salir del campo y no mientras se escribe: corregir a alguien a mitad
       del correo marca cada dirección como inválida hasta la última letra. */
    fields.forEach(function (input) {
        input.addEventListener('blur', function () {
            check(input);
        });
    });

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        var ok = true;
        var first = null;
        fields.forEach(function (input) {
            if (!check(input) && ok) {
                ok = false;
                first = input;
            }
        });

        status.className = 'status ' + (ok ? 'ok' : 'bad');
        status.textContent = say(ok ? 'sent' : 'failed');

        if (!ok) {
            first.focus();
            return;
        }

        /* El sitio es estático: todavía no hay API a la cual enviar. Se conecta
           en el sprint en que se implementen los web services. */
        form.reset();
    });
});
