/* app.jsx — monta a página, tweaks e animações de scroll */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": ["#A9824C", "#C7A567"],
  "titleFont": "Cormorant Garamond",
  "heroOverlay": 1
}/*EDITMODE-END*/;

function useReveal() {
  React.useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0.12 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  useReveal();

  React.useEffect(() => {
    const r = document.documentElement.style;
    r.setProperty('--gold', t.palette[0]);
    r.setProperty('--gold-soft', t.palette[1]);
    r.setProperty('--serif', `'${t.titleFont}', Georgia, serif`);
    r.setProperty('--hero-overlay', t.heroOverlay);
  }, [t]);

  const wppLink = 'https://wa.me/' + WPP_NUMBER;

  return (
    <React.Fragment>
      <Nav />
      <Hero />
      <Sobre />
      <Experiencia />
      <Roteiros />
      <Publico />
      <Planejar />
      <Footer wppLink={wppLink} />

      <TweaksPanel>
        <TweakSection label="Paleta" />
        <TweakColor
          label="Acento"
          value={t.palette}
          options={[
            ['#A9824C', '#C7A567'],
            ['#B5703A', '#D29455'],
            ['#9A3247', '#C77E8C'],
            ['#3E5E45', '#7E9B7C'],
          ]}
          onChange={(v) => setTweak('palette', v)}
        />
        <TweakSection label="Tipografia" />
        <TweakRadio
          label="Fonte dos títulos"
          value={t.titleFont}
          options={['Cormorant Garamond', 'Playfair Display']}
          onChange={(v) => setTweak('titleFont', v)}
        />
        <TweakSection label="Capa" />
        <TweakSlider
          label="Escurecer foto"
          value={t.heroOverlay}
          min={0.55} max={1.35} step={0.05}
          onChange={(v) => setTweak('heroOverlay', v)}
        />
      </TweaksPanel>
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
