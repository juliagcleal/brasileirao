// lista de times com id (inalterado) + file (nome exato do PNG em src/imagens) + name
const teams = [
  { id: 'cuiaba',        file: 'Cuiabá.png',        name: 'Cuiabá' },
  { id: 'vasco',         file: 'Vasco.png',         name: 'Vasco' },
  { id: 'sao-caetano',   file: 'São Caetano.png',   name: 'São Caetano' },
  { id: 'santa-cruz',    file: 'Santa Cruz.png',    name: 'Santa Cruz' },
  { id: 'paysandu',      file: 'Paysandu.png',      name: 'Paysandu' },
  { id: 'nautico',       file: 'Náutico.png',       name: 'Náutico' },
  { id: 'ipatinga',      file: 'Ipatinga.png',      name: 'Ipatinga' },
  { id: 'gremio',        file: 'Grêmio.png',        name: 'Grêmio' },
  { id: 'fortaleza',     file: 'Fortaleza.png',     name: 'Fortaleza' },
  { id: 'curitiba',      file: 'Curitiba.png',      name: 'Curitiba' },
  { id: 'cruzeiro',      file: 'Cruzeiro.png',      name: 'Cruzeiro' },
  { id: 'ceara',         file: 'Ceará.png',         name: 'Ceará' },
  { id: 'botafogo',      file: 'Botafogo.png',      name: 'Botafogo' },
  { id: 'avai-leao',     file: 'Avaí Leão.png',     name: 'Avaí Leão' },
  { id: 'athletico-pr',  file: 'Athletico-PR.png',  name: 'Athletico-PR' },

  { id: 'corinthians',   file: 'Corinthians.png',   name: 'Corinthians' },
  { id: 'sport',         file: 'Sport.png',         name: 'Sport' },
  { id: 'santos',        file: 'Santos.png',        name: 'Santos' },
  { id: 'portuguesa',    file: 'Portuguesa.png',    name: 'Portuguesa' },
  { id: 'parana',        file: 'Paraná.png',        name: 'Paraná' },
  { id: 'juventude',     file: 'Juventude.png',     name: 'Juventude' },
  { id: 'internacional', file: 'Internacional.png', name: 'Internacional' },
  { id: 'gremio-prudente', file: 'Grêmio Prudente.png', name: 'Grêmio Prudente' },
  { id: 'fluminense',    file: 'Fluminense.png',    name: 'Fluminense' },
  { id: 'figueirense',   file: 'Figueirense.png',   name: 'Figueirense' },
  { id: 'criciuma',      file: 'Criciúma.png',      name: 'Criciúma' },
  { id: 'brasiliense',   file: 'Brasiliense.png',   name: 'Brasiliense' },
  { id: 'barueri',       file: 'Barueri.png',       name: 'Barueri' },
  { id: 'atletico-mg',   file: 'Atlético-MG.png',   name: 'Atlético-MG' },
  { id: 'america-rn',    file: 'América-RN.png',    name: 'América-RN' },

  { id: 'vitoria',       file: 'Vitória.png',       name: 'Vitória' },
  { id: 'sao-paulo',     file: 'São Paulo.png',     name: 'São Paulo' },
  { id: 'santo-andre',   file: 'Santo André.png',   name: 'Santo André' },
  { id: 'ponte-preta',   file: 'Ponte Preta.png',   name: 'Ponte Preta' },
  { id: 'palmeiras',     file: 'Palmeiras.png',     name: 'Palmeiras' },
  { id: 'joinville',     file: 'Joinville.png',     name: 'Joinville' },
  { id: 'guarani',       file: 'Guarani.png',       name: 'Guarani' },
  { id: 'goias',         file: 'Goiás.png',         name: 'Goiás' },
  { id: 'flamengo',      file: 'Flamengo.png',      name: 'Flamengo' },
  { id: 'csa',           file: 'CSA.png',           name: 'CSA' },
  { id: 'chapecoense',   file: 'Chapecoense.png',   name: 'Chapecoense' },
  { id: 'bragantino',    file: 'Bragantino.png',    name: 'Bragantino' },
  { id: 'bahia',         file: 'Bahia.png',         name: 'Bahia' },
  { id: 'atletico-go',   file: 'Atlético-GO.png',   name: 'Atlético-GO' },
  { id: 'america-mg',    file: 'América-MG.png',    name: 'América-MG' }
];

// monta a grid usando o file exato
const container = document.getElementById('team-grid');
container.innerHTML = teams.map(t => `
  <div class="team-item">
    <img src="imagens/${t.file}" alt="${t.name}">
    <span>${t.name}</span>
  </div>
`).join('');
