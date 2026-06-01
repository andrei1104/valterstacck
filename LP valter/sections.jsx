/* sections.jsx — conteúdo principal da LP do Valter Staack */

function Nav({ onWpp }) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const f = () => setScrolled(window.scrollY > 60);
    f(); window.addEventListener('scroll', f);
    return () => window.removeEventListener('scroll', f);
  }, []);
  return (
    <nav className={'nav' + (scrolled ? ' scrolled' : '')}>
      <a className="brand" href="#topo">
        Valter Staack
        <small>Enoturismo · Serra Catarinense</small>
      </a>
      <div className="nav-links">
        <a href="#sobre">Sobre</a>
        <a href="#experiencia">A experiência</a>
        <a href="#roteiros">Roteiros</a>
        <a href="#planejar">Planejar</a>
        <a className="btn btn-gold" href="#planejar">Reservar experiência</a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <header className="hero" id="topo">
      <div className="hero-bg">
        <img src="assets/jantar.jpg" alt="Valter Staack em jantar harmonizado" />
      </div>
      <div className="wrap hero-inner">
        <p className="eyebrow" style={{ color: 'var(--gold-soft)' }}>Enoturismo Privado · Santa Catarina</p>
        <h1>Conheça os vinhos de Santa&nbsp;Catarina com quem <em>abre todas as portas.</em></h1>
        <p className="lead">
          Sommelier, viajante e contador de histórias. Valter Staack conduz você pelas
          vinícolas da Serra Catarinense — dos vinhos de altitude de São Joaquim aos vales
          da uva Goethe — com acesso direto a quem faz o vinho.
        </p>
        <div className="hero-cta">
          <a className="btn btn-gold" href="#planejar">Planejar minha experiência</a>
          <a className="btn btn-ghost" href="#sobre" style={{ color: 'var(--cream)' }}>Conhecer o Valter</a>
        </div>
      </div>
      <div className="hero-scroll">role para descer</div>
    </header>
  );
}

function Sobre() {
  return (
    <section className="sobre reveal" id="sobre">
      <div className="wrap sobre-grid">
        <div className="sobre-photos">
          <span className="tag">Brusque · SC</span>
          <img className="main" src="assets/valter-vinho.jpg" alt="Valter Staack degustando vinho" />
          <img className="inset" src="assets/egito.jpg" alt="Valter viajando pelo mundo" />
        </div>
        <div>
          <p className="eyebrow">O Anfitrião</p>
          <h2 className="display">Tem gente que entende de vinho.<br /> Valter conhece quem faz&nbsp;o&nbsp;vinho.</h2>
          <p className="quote">
            “Vinho bom a gente bebe. Grande vinho, a gente vive — com a história, a mesa
            e a pessoa certa do outro lado do balcão.”
            <span className="quote-by">— Valter Staack</span>
          </p>
          <p>
            Formado em sommelier e apaixonado por uma boa mesa, Valter percorreu vinícolas
            por diversos países antes de fazer de Santa Catarina o seu terroir de coração.
            Da Serra Catarinense ao Egito, ele coleciona rótulos, amizades e boas histórias.
          </p>
          <p>
            Hoje, morando em Brusque, ele recebe quem quer descobrir o melhor do vinho
            catarinense. Conhece pessoalmente os produtores, conversa de igual para igual
            com enólogos e garçons, e senta à mesa com você para escolher o rótulo certo
            para cada prato. Você não apenas visita uma vinícola — você é apresentado a ela.
          </p>
        </div>
      </div>
    </section>
  );
}

const EXP = [
  { n: 'I', t: 'Acesso de verdade', d: 'Conheço pessoalmente os produtores e donos das vinícolas. Você é recebido por quem faz o vinho — portas que não se abrem para o turista comum.' },
  { n: 'II', t: 'Curadoria de sommelier', d: 'Degustação guiada com calma: castas, safras e o terroir de altitude explicados de um jeito que o iniciante entende e o experiente respeita.' },
  { n: 'III', t: 'A mesa harmonizada', d: 'Vinho é metade da história; a outra é a comida. Escolho a harmonização certa com a gastronomia da serra, do queijo ao cordeiro.' },
  { n: 'IV', t: 'Histórias que ficam', d: 'Cada garrafa carrega uma história, e eu conto todas elas. A viagem vira memória — daquelas que você repete na próxima mesa com amigos.' },
];

function Experiencia() {
  return (
    <section className="exp reveal" id="experiencia">
      <div className="wrap">
        <div className="exp-head">
          <p className="eyebrow">A Experiência</p>
          <h2 className="display">Um roteiro conduzido,<br /> do primeiro brinde ao último.</h2>
          <p className="lead" style={{ marginTop: '1.4rem' }}>
            Não é um passeio de van com horário marcado. É uma experiência pessoal,
            no seu ritmo, desenhada para o seu paladar.
          </p>
        </div>
        <div className="exp-grid">
          {EXP.map((e) => (
            <div className="exp-card" key={e.n}>
              <div className="exp-num">{e.n}</div>
              <h3>{e.t}</h3>
              <p>{e.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const ROTAS = [
  { id: 'saojoaquim', alt: '900 – 1.400m de altitude', t: 'São Joaquim', d: 'O coração dos vinhos de altitude do Brasil. Tintos de corte encorpados e espumantes elegantes, nascidos na região mais fria do país.', meta: 'Villa Francioni · Monte Agudo · Pericó' },
  { id: 'contestado', alt: 'Planalto & Vale do Contestado', t: 'Vale do Contestado', d: 'A maior área plantada do estado, entre lagos e pôr do sol. Tradição familiar e rótulos longevos premiados nacionalmente.', meta: 'Villaggio Grando · Água Doce' },
  { id: 'goethe', alt: 'Herança italiana · IP Uva Goethe', t: 'Vales da Uva Goethe', d: 'Em Urussanga, a uva brasileiríssima Goethe e o patrimônio das famílias italianas. Brancos delicados com Indicação de Procedência.', meta: 'Urussanga · Casa del Nono' },
];

function Roteiros() {
  return (
    <section className="rot reveal" id="roteiros">
      <div className="wrap">
        <div className="rot-head">
          <div>
            <p className="eyebrow">Os Roteiros</p>
            <h2 className="display">Três Santa Catarinas<br /> dentro da taça.</h2>
          </div>
          <p>
            Montamos o roteiro conforme o seu tempo, seu grupo e o que você quer descobrir.
            Pode ser um dia, um fim de semana ou uma imersão completa pela serra.
          </p>
        </div>
        <div className="rot-grid">
          {ROTAS.map((r) => (
            <article className="rot-card" key={r.id}>
              <image-slot id={'rota-' + r.id} shape="rect" placeholder={'foto · ' + r.t}></image-slot>
              <div className="rot-body">
                <div className="rot-alt">{r.alt}</div>
                <h3>{r.t}</h3>
                <p>{r.d}</p>
                <div className="rot-meta">{r.meta}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const PUB = [
  { k: '01', b: 'Casais', s: 'Uma data especial regada a bons rótulos e pôr do sol na serra.' },
  { k: '02', b: 'Grupos de amigos', s: 'Aquela viagem que rende história para o ano inteiro.' },
  { k: '03', b: 'Turistas de fora', s: 'De Santa Catarina ou de qualquer lugar do Brasil — eu cuido de tudo.' },
  { k: '04', b: 'Quem está começando', s: 'Sem esnobismo. Aqui se aprende vinho rindo e provando.' },
  { k: '05', b: 'Apreciadores experientes', s: 'Conversa de gente grande, com acesso a rótulos e produtores.' },
];

function Publico() {
  return (
    <section className="pub reveal" id="publico">
      <div className="wrap pub-grid">
        <div>
          <p className="eyebrow">Para quem é</p>
          <h2 className="display">Feito sob medida<br /> para o seu paladar.</h2>
          <p className="lead" style={{ marginTop: '1.2rem' }}>
            Do curioso de primeira taça ao enófilo exigente — a experiência se adapta a você.
          </p>
        </div>
        <ul className="pub-list">
          {PUB.map((p) => (
            <li key={p.k}>
              <span className="k">{p.k}</span>
              <span className="t"><b>{p.b}</b><span>{p.s}</span></span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Footer({ wppLink }) {
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <a className="brand" href="#topo">Valter Staack
              <small>Enoturismo · Serra Catarinense</small></a>
            <p style={{ maxWidth: '34ch', marginTop: '1.4rem', color: 'rgba(242,233,218,.7)' }}>
              Experiências privadas pelas vinícolas de Santa Catarina, conduzidas por
              um sommelier que conhece cada produtor pelo nome.
            </p>
          </div>
          <div className="foot-col">
            <h4>Navegar</h4>
            <a href="#sobre">Sobre o Valter</a>
            <a href="#experiencia">A experiência</a>
            <a href="#roteiros">Roteiros</a>
            <a href="#planejar">Planejar visita</a>
          </div>
          <div className="foot-col">
            <h4>Contato</h4>
            <a href={wppLink} target="_blank" rel="noopener">WhatsApp · (47) 99151-3140</a>
            <a href="https://instagram.com/romellostaack" target="_blank" rel="noopener">Instagram @romellostaack</a>
            <p>Brusque — Santa Catarina</p>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© {new Date().getFullYear()} Valter Staack · Enoturismo</span>
          <span>Serra Catarinense · Brasil</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Nav, Hero, Sobre, Experiencia, Roteiros, Publico, Footer });
