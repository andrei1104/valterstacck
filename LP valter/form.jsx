/* form.jsx — formulário de pré-qualificação + envio para WhatsApp */

const WPP_NUMBER = '5547991513140'; // (47) 99151-3140

const TIPOS = ['Tinto', 'Branco', 'Rosé', 'Espumante', 'Quero descobrir'];
const ANOS = [
  'Estou começando agora',
  'Há 1 a 5 anos',
  'Há 5 a 15 anos',
  'Há mais de 15 anos',
];
const PERIODOS = ['O quanto antes', 'Próximo mês', 'Nos próximos meses', 'Ainda planejando'];

function Field({ label, children }) {
  return (
    <div className="field">
      <label>{label}</label>
      {children}
    </div>
  );
}

function Form() {
  const [f, setF] = React.useState({
    nome: '', telefone: '', origem: '', anos: '', pessoas: '',
    periodo: '', mensagem: '',
  });
  const [tipos, setTipos] = React.useState([]);
  const [sent, setSent] = React.useState(false);
  const set = (k) => (e) => setF((s) => ({ ...s, [k]: e.target.value }));
  const toggleTipo = (t) =>
    setTipos((s) => (s.includes(t) ? s.filter((x) => x !== t) : [...s, t]));

  const buildMessage = () => {
    const L = [];
    L.push('Olá, Valter! Quero conhecer as vinícolas de Santa Catarina com você.');
    L.push('');
    if (f.nome) L.push('• Nome: ' + f.nome);
    if (f.origem) L.push('• Venho de: ' + f.origem);
    if (f.telefone) L.push('• Telefone: ' + f.telefone);
    if (f.anos) L.push('• Bebo vinho: ' + f.anos.toLowerCase());
    if (tipos.length) L.push('• Vinhos preferidos: ' + tipos.join(', '));
    if (f.pessoas) L.push('• Pessoas no grupo: ' + f.pessoas);
    if (f.periodo) L.push('• Quando: ' + f.periodo);
    if (f.mensagem) { L.push(''); L.push('Mensagem: ' + f.mensagem); }
    return encodeURIComponent(L.join('\n'));
  };

  const submit = (e) => {
    e.preventDefault();
    const url = 'https://wa.me/' + WPP_NUMBER + '?text=' + buildMessage();
    window.open(url, '_blank');
    setSent(true);
  };

  if (sent) {
    return (
      <div className="form-card" style={{ textAlign: 'center' }}>
        <div style={{ fontFamily: 'var(--serif)', fontSize: '3rem', color: 'var(--gold)', lineHeight: 1 }}>✓</div>
        <h3 style={{ marginTop: '1rem' }}>Saúde! Já abrimos o WhatsApp.</h3>
        <p className="sub" style={{ marginBottom: '1.6rem' }}>
          Se a conversa não abriu automaticamente, toque no botão abaixo para falar
          diretamente com o Valter — suas respostas já vão preenchidas.
        </p>
        <a
          className="btn btn-wpp"
          style={{ width: '100%', justifyContent: 'center' }}
          href={'https://wa.me/' + WPP_NUMBER + '?text=' + buildMessage()}
          target="_blank" rel="noopener"
        >
          Abrir conversa no WhatsApp
        </a>
        <button
          className="form-note"
          style={{ background: 'none', border: 'none', cursor: 'pointer', marginTop: '1.4rem' }}
          onClick={() => setSent(false)}
        >
          ← Editar minhas respostas
        </button>
      </div>
    );
  }

  return (
    <form className="form-card" onSubmit={submit}>
      <h3>Vamos planejar sua experiência</h3>
      <p className="sub">Conte um pouco sobre você. Em segundos, você fala direto com o Valter no WhatsApp.</p>

      <Field label="Seu nome">
        <input type="text" required value={f.nome} onChange={set('nome')} placeholder="Como podemos te chamar?" />
      </Field>

      <div className="row2">
        <Field label="De onde você vem">
          <input type="text" value={f.origem} onChange={set('origem')} placeholder="Cidade / Estado" />
        </Field>
        <Field label="WhatsApp / Telefone">
          <input type="tel" value={f.telefone} onChange={set('telefone')} placeholder="(00) 00000-0000" />
        </Field>
      </div>

      <Field label="Há quanto tempo você bebe vinho?">
        <select required value={f.anos} onChange={set('anos')}>
          <option value="" disabled>Selecione...</option>
          {ANOS.map((a) => <option key={a} value={a}>{a}</option>)}
        </select>
      </Field>

      <Field label="Que vinhos você mais gosta? (pode marcar vários)">
        <div className="chips">
          {TIPOS.map((t) => (
            <span
              key={t}
              className={'chip' + (tipos.includes(t) ? ' on' : '')}
              onClick={() => toggleTipo(t)}
            >{t}</span>
          ))}
        </div>
      </Field>

      <div className="row2">
        <Field label="Quantas pessoas">
          <input type="number" min="1" value={f.pessoas} onChange={set('pessoas')} placeholder="Ex.: 2" />
        </Field>
        <Field label="Quando pretende ir">
          <select value={f.periodo} onChange={set('periodo')}>
            <option value="" disabled>Selecione...</option>
            {PERIODOS.map((p) => <option key={p} value={p}>{p}</option>)}
          </select>
        </Field>
      </div>

      <Field label="Algo mais? (opcional)">
        <textarea value={f.mensagem} onChange={set('mensagem')} placeholder="Ocasião especial, preferências, restrições..."></textarea>
      </Field>

      <button type="submit" className="btn btn-gold">Enviar e falar com o Valter</button>
      <div className="form-note">
        <span style={{ color: '#1f7a4d' }}>●</span> Suas respostas vão direto para o WhatsApp do Valter
      </div>
    </form>
  );
}

function Planejar() {
  const wppLink = 'https://wa.me/' + WPP_NUMBER;
  return (
    <section className="cta reveal" id="planejar">
      <div className="wrap cta-grid">
        <div className="cta-intro">
          <p className="eyebrow">Reserve sua experiência</p>
          <h2 className="display" style={{ color: 'var(--cream)' }}>
            A próxima boa história começa numa taça.
          </h2>
          <p className="lead">
            Conte o que você gosta e o Valter desenha um roteiro sob medida.
            Vagas limitadas — o atendimento é pessoal, um grupo de cada vez.
          </p>
          <ul className="cta-points">
            <li>Roteiro personalizado para o seu grupo</li>
            <li>Acesso direto aos produtores da serra</li>
            <li>Degustação e harmonização guiadas</li>
            <li>Atendimento em português, do início ao fim</li>
          </ul>
        </div>
        <Form />
      </div>
    </section>
  );
}

Object.assign(window, { Form, Planejar, WPP_NUMBER });
