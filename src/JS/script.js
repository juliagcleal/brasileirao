// mantém seus IDs e adiciona `file` = nome exato do PNG
const teams = [
  { id: 'vasco',           file: 'Vasco.png',           name: 'Vasco' },
  { id: 'juventude',       file: 'Juventude.png',       name: 'Juventude' },
  { id: 'guarani',         file: 'Guarani.png',         name: 'Guarani' },
  { id: 'criciuma',        file: 'Criciúma.png',        name: 'Criciúma' },
  { id: 'ceara',           file: 'Ceará.png',           name: 'Ceará' },
  { id: 'avai',            file: 'Avaí.png',            name: 'Avaí' },
  { id: 'gremio-prudente', file: 'Grêmio Prudente.png', name: 'Grêmio Prudente' },
  { id: 'sao-caetano',     file: 'São Caetano.png',     name: 'São Caetano' },
  { id: 'barueri',         file: 'Barueri.png',         name: 'Barueri' },
  { id: 'america-rn',      file: 'América-RN.png',      name: 'América-RN' },

  { id: 'america-mg',      file: 'América-MG.png',      name: 'América-MG' },
  { id: 'vitoria',         file: 'Vitória.png',         name: 'Vitória' },
  { id: 'sport',           file: 'Sport.png',           name: 'Sport' },
  { id: 'ponte-preta',     file: 'Ponte Preta.png',     name: 'Ponte Preta' },
  { id: 'santo-andre',     file: 'Santo André.png',     name: 'Santo André' },
  { id: 'nautico',         file: 'Náutico.png',         name: 'Náutico' },
  { id: 'paysandu',        file: 'Paysandu.png',        name: 'Paysandu' },
  { id: 'joinville',       file: 'Joinville.png',       name: 'Joinville' },
  { id: 'ipatinga',        file: 'Ipatinga.png',        name: 'Ipatinga' },
  { id: 'goias',           file: 'Goiás.png',           name: 'Goiás' },

  { id: 'figueirense',     file: 'Figueirense.png',     name: 'Figueirense' },
  { id: 'fortaleza',       file: 'Fortaleza.png',       name: 'Fortaleza' },
  { id: 'cuiaba',          file: 'Cuiabá.png',          name: 'Cuiabá' },
  { id: 'csa',             file: 'CSA.png',             name: 'CSA' },
  { id: 'chapecoense',     file: 'Chapecoense.png',     name: 'Chapecoense' },
  { id: 'brasiliense',     file: 'Brasiliense.png',     name: 'Brasiliense' },
  { id: 'bragantino',      file: 'Bragantino.png',      name: 'Bragantino' },
  { id: 'bahia',           file: 'Bahia.png',           name: 'Bahia' },
  { id: 'parana',          file: 'Paraná.png',          name: 'Paraná' },
  { id: 'curitiba',        file: 'Curitiba.png',        name: 'Curitiba' },

  { id: 'atletico-go',     file: 'Atlético-GO.png',     name: 'Atlético-GO' },
  { id: 'sao-paulo',       file: 'São Paulo.png',       name: 'São Paulo' },
  { id: 'santos',          file: 'Santos.png',          name: 'Santos' },
  { id: 'santa-cruz',      file: 'Santa Cruz.png',      name: 'Santa Cruz' },
  { id: 'portuguesa',      file: 'Portuguesa.png',      name: 'Portuguesa' },
  { id: 'palmeiras',       file: 'Palmeiras.png',       name: 'Palmeiras' },
  { id: 'internacional',   file: 'Internacional.png',   name: 'Internacional' },
  { id: 'gremio',          file: 'Grêmio.png',          name: 'Grêmio' },
  { id: 'fluminense',      file: 'Fluminense.png',      name: 'Fluminense' },
  { id: 'flamengo',        file: 'Flamengo.png',        name: 'Flamengo' },

  { id: 'cruzeiro',        file: 'Cruzeiro.png',        name: 'Cruzeiro' },
  { id: 'corinthians',     file: 'Corinthians.png',     name: 'Corinthians' },
  { id: 'botafogo-rj',     file: 'Botafogo-RJ.png',     name: 'Botafogo-RJ' },
  { id: 'atletico-mg',     file: 'Atlético-MG.png',     name: 'Atlético-MG' },
  { id: 'athletico-pr',    file: 'Athletico-PR.png',    name: 'Athletico-PR' }
];

// monta grid de escudos
const shieldGrid = document.getElementById('shield-grid');
shieldGrid.innerHTML = teams.map(t => `
  <div class="item">
    <img src="imagens/Escudos/${t.file}" alt="${t.name} Escudo" />
    <span>${t.name}</span>
  </div>
`).join('');

// monta grid de mascotes
const mascotGrid = document.getElementById('mascot-grid');
mascotGrid.innerHTML = teams.map(t => `
  <div class="item">
    <img src="imagens/Mascotes/${t.file}" alt="${t.name} Mascote" />
    <span>${t.name}</span>
  </div>
`).join('');
