/* ═══════ ACADEMIA DE CIÊNCIAS EXATAS — dados + lógica ═══════ */
"use strict";

/* ─────────── ASSUNTOS ─────────── */
const SUBJ = {
  fracoes:{n:"Frações",a:"Matemática"},
  algebra:{n:"Álgebra básica",a:"Matemática"},
  porcentagem:{n:"Porcentagem",a:"Matemática"},
  produtos:{n:"Produtos notáveis e fatoração",a:"Matemática"},
  funcoes:{n:"Funções",a:"Matemática"},
  trigonometria:{n:"Trigonometria",a:"Matemática"},
  limites:{n:"Limites",a:"Matemática"},
  derivadas:{n:"Derivadas",a:"Matemática"},
  analise:{n:"Análise (continuidade)",a:"Matemática"},
  mecanica:{n:"Mecânica básica",a:"Física"},
  gravitacao:{n:"Gravitação e órbitas",a:"Física"},
  ondas:{n:"Ondas",a:"Física"},
  relatividade:{n:"Relatividade",a:"Física"},
  atomos:{n:"Estrutura atômica",a:"Química"},
  ligacoes:{n:"Ligações químicas",a:"Química"},
  estequiometria:{n:"Estequiometria",a:"Química"},
  termoquimica:{n:"Termoquímica",a:"Química"},
  algoritmos:{n:"Algoritmos e programação",a:"Computação"},
  complexidade:{n:"Complexidade computacional",a:"Computação"},
  ciencia:{n:"Pensamento científico",a:"Método"},
};

/* ─────────── BANCO DE DIAGNÓSTICO (30 questões em escada) ─────────── */
/* type: num | mc | self   ·   pontos: sozinho 2 · com pista 1,2 · após solução 0,3 · self: acertei 2 / com pista 1,2 / não sei 0 */
const QUESTIONS = [
 {id:"A1",blk:"A",sub:"fracoes",lvl:1,type:"num",ans:45,mc:false,
  q:"[MC] Quanto é 3/4 de 60? Mostre o raciocínio.",
  hints:["60÷4 = 15 é *uma* parte de 4 (1/4).","3/4 são três dessas partes: 3 × 15."],
  sol:"1/4 de 60 = 15, então 3/4 = 45."},
 {id:"A2",blk:"A",sub:"algebra",lvl:2,type:"num",ans:9,
  q:"[MC] Resolva e explique cada passo: 2x − 7 = 11",
  hints:["Isole o termo com x: o que fazer com o −7?","Some 7 nos dois lados: 2x = 18."],
  sol:"2x − 7 = 11 → 2x = 11 + 7 = 18 → x = 9. Verificação: 2·9 − 7 = 11 ✓"},
 {id:"A3",blk:"A",sub:"porcentagem",lvl:2,type:"num",ans:204,
  q:"[MC] Um tênis de R$ 240 tem 15% de desconto. Qual o preço final?",
  hints:["15% de 240 = 240 × 0,15 = ?","Desconto de R$ 36. 240 − 36 = ?"],
  sol:"15% de 240 = 36. Preço final: 240 − 36 = R$ 204."},
 {id:"A4",blk:"A",sub:"produtos",lvl:3,type:"self",
  q:"Expanda (a+b)² e *justifique sem álgebra* por que o resultado é esse. Dica de desenho: um quadrado de lado (a+b) cortado em 4 pedaços.",
  hints:["O quadrado de lado (a+b) se divide em: um quadrado a², um b² e *dois* retângulos ab.","A área do quadrado grande, (a+b)², é a soma das 4 peças."],
  sol:"(a+b)² = a² + 2ab + b². O '2ab' aparece porque o retângulo ab existe duas vezes no corte do quadrado. Quem expande como a² + ab + b² esquece uma peça do desenho."},
 {id:"A5",blk:"A",sub:"funcoes",lvl:3,type:"mc",opts:["(x − 3)/2","(x + 3)/2","2x − 3","1/(2x + 3)"],ans:0,
  q:"Se f(x) = 2x + 3, qual é a inversa f⁻¹(x)?",
  hints:["Troque os papéis: y = 2x + 3 vira x = 2y + 3.","Isole y: x − 3 = 2y."],
  sol:"y = 2x+3 → x = 2y+3 → y = (x−3)/2. Verificação: f((x−3)/2) = 2·(x−3)/2 + 3 = x ✓"},
 {id:"A6",blk:"A",sub:"produtos",lvl:3,type:"num",ans:23,
  q:"Se x + 1/x = 5, quanto vale x² + 1/x²?",
  hints:["Eleve os dois lados ao quadrado: (x + 1/x)².","O termo do meio: 2 · x · (1/x) = 2."],
  sol:"(x+1/x)² = x² + 2 + 1/x² = 25 → x² + 1/x² = 23."},
 {id:"A7",blk:"A",sub:"trigonometria",lvl:3,type:"mc",opts:["12/13","5/13","5/12","12/5"],ans:0,
  q:"Triângulo retângulo com catetos 5 e 12. Qual o seno do maior ângulo agudo?",
  hints:["Hipotenusa: 5² + 12² = 169 → 13.","O maior ângulo agudo é oposto ao maior cateto (12). Seno = oposto/hipotenusa."],
  sol:"sen(θ) = 12/13. O maior ângulo agudo olha para o cateto 12; hipotenusa 13."},
 {id:"A8",blk:"A",sub:"limites",lvl:5,type:"num",ans:6,
  q:"Calcule lim x→3 de (x² − 9)/(x − 3). Por que a substituição direta dá problema?",
  hints:["Direto: 0/0 — indeterminação. Fatore o numerador.","x² − 9 = (x−3)(x+3). Cancele o (x−3)."],
  sol:"(x−3)(x+3)/(x−3) = x + 3 → 6. O limite existe embora a expressão *em* x=3 não esteja definida: ele descreve para onde os valores vizinhos tendem."},
 {id:"A9",blk:"A",sub:"derivadas",lvl:5,type:"num",ans:10,
  q:"Pela *definição* (limite da razão de variação), calcule a derivada de f(x) = x³ − 2x em x = 2. Sem a regra pronta.",
  hints:["Definição: f'(2) = lim h→0 [f(2+h) − f(2)]/h.","(2+h)³ = 8 + 12h + 6h² + h³ (expanda). f(2)=4. Subtraia, divida por h, mande h→0."],
  sol:"f(2+h) − f(2) = (8+12h+6h²+h³ −4−2h) − 4 = 10h + 6h² + h³. Dividindo por h: 10 + 6h + h² → h→0 dá **10**. A regra do 'tripla e subtrai um' (3x²−2 em x=2) confirma."},
 {id:"A10",blk:"A",sub:"analise",lvl:6,type:"self",
  q:"O que significa, formalmente, uma função ser contínua em um ponto? Definição com limite + interpretação.",
  hints:["Três exigências: f(a) existe; o limite em a existe; os dois coincidem.","Escreva: lim x→a f(x) = f(a)."],
  sol:"f é contínua em a ⟺ lim x→a f(x) = f(a). Interpretação: perto de a, os valores da função ficam próximos de f(a) — o gráfico se percorre 'sem tirar o lápis'."},
 {id:"B1",blk:"B",sub:"mecanica",lvl:2,type:"num",ans:20,
  q:"[MC] Converta 72 km/h em m/s, justificando o fator de conversão.",
  hints:["1 km = 1000 m e 1 h = 3600 s.","72 × 1000 ÷ 3600."],
  sol:"72 km/h = 72000 m ÷ 3600 s = 20 m/s. O fator 3,6 vem exatamente daí (3600/1000)."},
 {id:"B2a",blk:"B",sub:"mecanica",lvl:3,type:"mc",opts:["−4 m/s²","+4 m/s²","−0,25 m/s²","−100 m/s²"],ans:0,
  q:"Um carro a 20 m/s freia uniformemente até parar em 5 s. Qual a aceleração média?",
  hints:["a = Δv/Δt.","Δv = 0 − 20 = −20 m/s em 5 s."],
  sol:"a = −20/5 = −4 m/s². Sinal negativo: a velocidade está *diminuindo*."},
 {id:"B2b",blk:"B",sub:"mecanica",lvl:3,type:"num",ans:50,
  q:"E que distância o carro percorreu até parar?",
  hints:["Área sob o gráfico v×t, que é um triângulo.","(base × altura)/2 = (5 × 20)/2."],
  sol:"50 m. Distância = área do triângulo = ½ · 20 · 5."},
 {id:"B3",blk:"B",sub:"gravitacao",lvl:3,type:"mc",
  opts:["Porque não há gravidade no espaço","Porque a estação e o astronauta caem juntos: queda livre contínua","Porque estão muito longe da Terra","Porque o ar foi retirado"],ans:1,
  q:"A gravidade na Estação Espacial é ~90% da da superfície. Por que os astronautas flutuam?",
  hints:["Se houvesse 'zero-g', a estação não orbitaria: gravidade é o que a mantém presa à Terra.","Estação e astronauta têm a mesma aceleração, sem chão entre eles."],
  sol:"Ambos estão em queda livre: caem *juntos* com a mesma aceleração. Sem chão empurrando seus pés, não há sensação de peso. É por isso que 'gravidade zero' no cinema é um erro conceitual."},
 {id:"B4",blk:"B",sub:"ondas",lvl:4,type:"mc",opts:["amplitude","frequência","velocidade","comprimento de onda"],ans:0,
  q:"Ao aumentar o volume do som, o que muda fisicamente na onda?",
  hints:["Volume é energia transportada por segundo (intensidade).","Intensidade ∝ amplitude². Frequência é o *tom* (agudo/grave), não o volume."],
  sol:"A **amplitude** (altura da oscilação) cresce — a frequência (tom) e a velocidade do som no mesmo meio não mudam. Intensidade ∝ A²."},
 {id:"B5",blk:"B",sub:"gravitacao",lvl:5,type:"self",
  q:"Por que a Terra 'cai' na direção do Sol continuamente sem nunca atingi-lo?",
  hints:["A Terra tem velocidade lateral enorme (~30 km/s) *perpendicular* à queda.","Enquanto cai, a Terra percorre um arco: a superfície da órbita 'curva' na mesma proporção da queda."],
  sol:"A Terra está sempre acelerando para o Sol (queda), mas sua velocidade lateral faz o chão 'fugir': em 1 s ela cai ~3 mm em direção ao Sol, mas avança 30 km lateralmente, e a curvatura da órbita compensa exatamente. Órbita = queda contínua que erra o alvo para sempre."},
 {id:"B6",blk:"B",sub:"relatividade",lvl:6,type:"self",
  q:"Paradoxo dos gêmeos: quem envelhece menos e por quê? Até 3 linhas de raciocínio.",
  hints:["Dilatação do tempo é real, não ilusão de ótica. Mas há assimetria entre os irmãos.","A assimetria: o viajante *acelera* e inverte o referencial (volta); a Terra, não."],
  sol:"O gêmeo viajante envelhece menos. A situação não é simétrica: ele troca de referencial inercial (acelera na ida, inverte na volta), a Terra permanece num único referencial. O tempo próprio acumulado dele é menor — verificável com relógios atômicos em aviões (experimento de Hafele–Keating)."},
 {id:"C1",blk:"C",sub:"atomos",lvl:2,type:"mc",opts:["2, 8, 1","2, 8, 8, 1","2, 9","11, 0"],ans:0,
  q:"Sódio (Z = 11): distribua os elétrons por camadas e diga por que ele tende a formar íon +1.",
  hints:["Camadas comportam até 2n² elétrons: K=2, L=8.","A terceira camada ainda aceita até 8; sobra 1 elétron no Na."],
  sol:"Na: 2, 8, 1. Perder 1 elétron dá a configuração estável de neônio (2,8) → Na⁺. Ganhar 7 seria energeticamente absurdo."},
 {id:"C2",blk:"C",sub:"ligacoes",lvl:3,type:"mc",
  opts:["Na água o sal libera íons (Na⁺ e Cl⁻) livres para mover carga","Na água nascem elétrons novos","O sal sólido tem elétrons presos que se soltam na água","A água conduz por si só e o sal só acelera"],ans:0,
  q:"Por que o NaCl sólido não conduz eletricidade, mas dissolvido em água conduz?",
  hints:["No sólido, os íons existem mas estão travados na rede cristalina.","Condução exige portadores de carga *livres para se mover*."],
  sol:"Dissolvido, a água separa os íons (cada um hidratado) e eles ficam livres: Na⁺ vai ao polo negativo, Cl⁻ ao positivo. Condução elétrica é movimento de carga, não existência de carga."},
 {id:"C3",blk:"C",sub:"estequiometria",lvl:4,type:"mc",
  opts:["C₃H₈ + 5 O₂ → 3 CO₂ + 4 H₂O","C₃H₈ + 3 O₂ → 3 CO₂ + 3 H₂O","C₃H₈ + 4 O₂ → 3 CO₂ + 2 H₂O","2 C₃H₈ + 5 O₂ → 6 CO₂ + 4 H₂O"],ans:0,
  q:"Balanceie C₃H₈ + O₂ → CO₂ + H₂O. Depois responda: o que o balanceamento *representa fisicamente*?",
  hints:["C: 3 de um lado → 3 CO₂. H: 8 → 4 H₂O.","O: 3×2 + 4×1 = 10 átomos → 5 O₂. Fisicamente: átomos não são criados nem destruídos."],
  sol:"C₃H₈ + 5O₂ → 3CO₂ + 4H₂O. Balancear = respeitar a conservação de átomos (Lavoisier): o mesmo número de cada elemento entra e sai da reação."},
 {id:"C4",blk:"C",sub:"termoquimica",lvl:5,type:"self",
  q:"Reação exotérmica libera calor. De onde vem essa energia, se energia não pode ser criada?",
  hints:["Energia está armazenada na *estrutura* (ligações) das moléculas.","Compare a energia total das ligações dos reagentes com a dos produtos."],
  sol:"Energia química é energia de ligação. Se as ligações dos produtos são mais estáveis (energia total menor), a diferença sai para o ambiente como calor (agitação térmica). Nada é criado: energia potencial de ligação vira energia cinética das moléculas vizinhas."},
 {id:"C5",blk:"C",sub:"ligacoes",lvl:6,type:"self",
  q:"A molécula de água é minúscula. Por que ela é líquida em temperatura ambiente, se o CO₂ (maior) é gás?",
  hints:["Pense nas forças *entre* moléculas, não dentro delas.","O O–H é fortemente polar: existe uma atração intermolecular especial chamada ligação de hidrogênio."],
  sol:"A água tem ligações de hidrogênio: atrações intermoleculares fortes entre o H de uma molécula e o O de outra. CO₂ é apolar — só interações fracas (London). Resultado: água aguenta estado líquido; CO₂ só condensa a −78 °C. O tamanho da molécula importa menos do que a polaridade."},
 {id:"D1",blk:"D",sub:"algoritmos",lvl:2,type:"self",
  q:"Escreva (pseudo-código, Java ou Python) um programa que soma os números de 1 a 100 e imprime o total.",
  hints:["Use um *acumulador*: variável que guarda a soma parcial.","Para cada i de 1 a 100: soma ← soma + i."],
  sol:"total = 0; for (i=1; i≤100; i++) total += i; imprimir total → 5050. Alternativa elegante (Gauss): 100·101/2 = 5050."},
 {id:"D2",blk:"D",sub:"algoritmos",lvl:3,type:"mc",
  opts:["1 / 12 / 123","123","1 2 3","11 / 22 / 33"],ans:0,
  q:"O que imprime?  para i de 1 até 3: para j de 1 até i: imprima j  (nova linha a cada i)",
  hints:["Simule com lápis: i=1 → j anda de 1 a 1.","O laço interno anda até i: linha 1 tem '1', linha 2 tem '1 2', linha 3 tem '1 2 3'."],
  sol:"Imprime três linhas: 1 / 1 2 / 1 2 3. O limite do laço interno *depende* do externo."},
 {id:"D3",blk:"D",sub:"algoritmos",lvl:4,type:"self",
  q:"Diferença entre variável comum e lista/array? Dê um problema em que a lista é necessária.",
  hints:["Variável: uma gaveta. Lista: um armário com posições numeradas.","Sem lista: como guardar as 40 notas de uma turma e calcular a média depois?"],
  sol:"Variável guarda 1 valor; lista guarda uma sequência indexada e percorrível. Exemplo: médias de uma turma — precisa guardar *todas* as notas antes de processar (média, máximo, quem passou). Com 40 variáveis soltas isso é inviável."},
 {id:"D4",blk:"D",sub:"algoritmos",lvl:5,type:"self",
  q:"Escreva uma função que recebe n e responde se n é primo (linguagem que quiser).",
  hints:["Primo: divisível apenas por 1 e por ele mesmo (n > 1).","Teste divisores d de 2 até n−1; se algum divide, não é primo."],
  sol:"def primo(n):\n  if n < 2: return False\n  for d in range(2, n):\n    if n % d == 0: return False\n  return True"},
 {id:"D5",blk:"D",sub:"complexidade",lvl:6,type:"self",
  q:"Quantas comparações sua função de primos faz no pior caso? Dá para melhorar? Por quê funciona?",
  hints:["Conte as voltas do laço: até n−1 → O(n) por número.","Se n = a·b com a ≤ b, então a ≤ √n. Basta testar até √n."],
  sol:"Testar até n−1 é O(n). Melhor: até √n → O(√n). Funciona porque um número composto sempre tem um fator ≤ √n (se os dois fossem > √n, o produto seria > n)."},
 {id:"E1",blk:"E",sub:"ciencia",lvl:4,type:"mc",
  opts:["Hipótese é palpite; teoria é hipótese comprovada; lei é teoria antiga","Hipótese: conjectura testável. Teoria: estrutura explicativa ampla, bem corroborada. Lei: descrição de regularidade, frequentemente matemática — teoria não 'vira' lei","Lei > teoria > hipótese numa hierarquia de certeza","Teoria e lei são sinônimos"],ans:1,
  q:"Qual a diferença entre hipótese, teoria e lei científica? (Cuidado: não é sobre 'grau de certeza')",
  hints:["'Teoria' na ciência não é palpite — é estrutura explicativa.","Lei descreve *como* (regularidade); teoria explica *por quê* (mecanismo). Nenhuma é 'comprovada' — todas são corroboradas até serem falsificadas."],
  sol:"Hipótese: conjectura testável. Teoria: estrutura explicativa ampla e corroborada (evolução, relatividade). Lei: regularidade descritiva (Lei de Ohm, de Snell). Teoria não 'vira' lei com o tempo: são papéis diferentes, não degraus de certeza."},
 {id:"E2",blk:"E",sub:"ciencia",lvl:5,type:"self",
  q:"Manchete: 'Estudo mostra que quem come cereal matinal vive mais.' Liste 3 perguntas críticas antes de aceitar a conclusão.",
  hints:["O estudo foi observacional ou experimental? Quem escolheu comer cereal?","Pessoas que comem cereal talvez tenham renda, hábito de exercício e dieta melhores (confounders)."],
  sol:"1) É correlação ou causalidade? (observacional não estabelece causalidade) 2) Há confounders — renda, idade, exercício, saúde prévia? 3) Qual o tamanho do efeito e a incerteza? (estatisticamente significativo ≠ importante)"},
 {id:"E3",blk:"E",sub:"ciencia",lvl:5,type:"self",
  q:"O que é uma variável de confusão (confounder)? Invente um exemplo seu.",
  hints:["Terceira variável ligada tanto à 'causa' quanto ao 'efeito'.","Clássico: vendas de sorvete se correlacionam com afogamentos..."],
  sol:"Confounder = variável que influencia tanto a suposta causa quanto o efeito, criando correlação espúria. Exemplo meu: número de bombeiros em um incêndio se correlaciona com o dano — não porque bombeiros destroem, mas porque incêndios grandes chamam mais bombeiros (o tamanho do incêndio é o confunder)."},
 {id:"E4",blk:"E",sub:"ciencia",lvl:6,type:"self",
  q:"Desenhe um experimento para testar: 'a ponte desaba por ressonância com o vento.' (variáveis, controles, medidas)",
  hints:["Variável independente: frequência/intensidade da excitação. Dependente: amplitude de oscilação.","Precisa de controle: mesma ponte sem excitação; e da medida ao longo do tempo."],
  sol:"Modelo em miniatura: excitar com vento em frequências controladas (variável independente) e medir amplitude de oscilação até ruptura (dependente). Controle: modelo idêntico sem excitação. Espera-se pico de amplitude em frequência própria (ressonância). Se a ruptura ocorrer só próximo dessa frequência, a hipótese é corroborada — não 'provada'."},
];

/* ─────────── TRILHA ATÉ A FRONTEIRA (árvore de pré-requisitos) ─────────── */
const TRAIL = [
 {id:"t-calc1", n:"Cálculo diferencial", deps:["funcoes","produtos","trigonometria"]},
 {id:"t-calc2", n:"Cálculo integral", deps:["t-calc1","limites"]},
 {id:"t-multi", n:"Cálculo multivariável", deps:["t-calc1","t-calc2"]},
 {id:"t-lin",  n:"Álgebra linear", deps:["algebra"]},
 {id:"t-edo",  n:"Equações diferenciais", deps:["t-calc1","t-lin"]},
 {id:"t-prob", n:"Probabilidade e estatística", deps:["algebra","porcentagem"]},
 {id:"t-mec",  n:"Mecânica clássica", deps:["t-calc1","t-edo","mecanica"]},
 {id:"t-em",   n:"Eletromagnetismo", deps:["t-mec","t-multi"]},
 {id:"t-termo",n:"Termodinâmica", deps:["t-mec","t-calc2"]},
 {id:"t-est",  n:"Mecânica estatística", deps:["t-termo","t-prob"]},
 {id:"t-re",   n:"Relatividade especial", deps:["t-mec","t-em","t-lin"]},
 {id:"t-mq",   n:"Mecânica quântica", deps:["t-re","t-edo","t-lin"]},
 {id:"t-rg",   n:"Relatividade geral", deps:["t-multi","t-re","gravitacao","t-mec"]},
 {id:"t-qft",  n:"Teoria quântica de campos", deps:["t-mq","t-rg"]},
 {id:"t-part", n:"Física de partículas", deps:["t-qft"]},
 {id:"t-astro",n:"Astrofísica", deps:["t-rg","t-est"]},
 {id:"t-cosmo",n:"Cosmologia", deps:["t-astro","t-rg"]},
 {id:"t-lcdm", n:"Modelo ΛCDM", deps:["t-cosmo","t-est"]},
 {id:"t-dm",   n:"Matéria escura (evidências e modelos)", deps:["t-lcdm","t-astro"]},
 {id:"t-de",   n:"Energia escura", deps:["t-lcdm"]},
];

/* ─────────── AULAS ─────────── */
const LESSONS = [
 {id:"l1", sub:"produtos", n:"Produtos notáveis sem decoreba", lvl:"Nível 3",
  tags:"intuição · formalização · demonstração",
  body:`<p><b>Intuição.</b> (a+b)² é a *área de um quadrado* de lado (a+b). Corte-o: um pedaço a², um b² e dois retângulos de lados a e b. A área não muda por cortar — logo (a+b)² = a² + ab + ab + b².</p>
  <div class="form">(a + b)² = a² + 2ab + b²</div>
  <p><b>Formalização.</b> A mesma conclusão vem da distributiva: (a+b)(a+b) = a·a + a·b + b·a + b·b. Note que a·b e b·a são o *mesmo* termo — é a peça que quem decora erra esquece.</p>
  <p><b>Aplicação.</b> Calcule 51² sem calculadora: 51² = (50+1)² = 2500 + 100 + 1 = 2601.</p>
  <p><b>Transferência.</b> E (a−b)²? Desenhe o quadrado de lado (a−b) dentro do quadrado a²... o resultado a² − 2ab + b² também sai do desenho.</p>
  <p><b>Exercício.</b> Expanda (x+3)². E agora o difícil: por que (a+b)(a−b) = a² − b²? (pista: retângulo com um pedaço a menos)</p>`,
  review:"Por que o termo '2ab' aparece em (a+b)²? Explique com o desenho."},
 {id:"l2", sub:"funcoes", n:"Funções e a inversa: a máquina que desfaz", lvl:"Nível 3",
  tags:"intuição · formalização · aplicação",
  body:`<p><b>Intuição.</b> Função é uma máquina: entra x, sai f(x). A inversa é a máquina que *desfaz* — se f transforma 2 em 7, f⁻¹ transforma 7 de volta em 2.</p>
  <p><b>Formalização.</b> f⁻¹(f(x)) = x para todo x do domínio. Existir inversa exige que f não mande dois números diferentes pro mesmo lugar (injetividade).</p>
  <p><b>Derivação do método.</b> Para achar f⁻¹: escreva y = f(x), troque os papéis de x e y, isole y. Isso *é* a definição caminhando de trás pra frente.</p>
  <div class="form">f(x) = 2x + 3 → x = 2y + 3 → x − 3 = 2y → f⁻¹(x) = (x−3)/2</div>
  <p><b>Transferência.</b> Temperatura: C = (F − 32)·5/9 e F = C·9/5 + 32 são inversas. Teste: 100 °C → 212 °F → volta a 100 °C?</p>
  <p><b>Exercício.</b> Ache a inversa de g(x) = (x+1)/(x−2), x ≠ 2. O que acontece com o domínio?</p>`,
  review:"O que precisa ser verdade sobre f para que f⁻¹ exista?"},
 {id:"l3", sub:"derivadas", n:"A derivada sem regra pronta: velocidade instantânea", lvl:"Nível 5",
  tags:"intuição · derivação · cálculo",
  body:`<p><b>Intuição.</b> Velocidade média = distância/tempo. Mas a velocidade *agora*, num instante só? O truque: encolha o intervalo de tempo até quase zero e veja para onde a média tende.</p>
  <p><b>Formalização.</b></p>
  <div class="form">f'(a) = lim h→0 [f(a+h) − f(a)] / h</div>
  <p><b>Derivação de verdade.</b> Para f(x) = x², a definição dá [(a+h)² − a²]/h = (2ah + h²)/h = 2a + h. Quando h→0, sobra <b>2a</b>. A regra "multiplica pelo expoente e subtrai um" *nasce* desse limite — não é mágica.</p>
  <p><b>Conexões.</b> Física: velocidade é a derivada da posição; aceleração, da velocidade. Economia: custo marginal. ML: o gradiente que treina redes neurais é uma derivada. Biologia: taxa de crescimento populacional. A mesma ideia em todos.</p>
  <p><b>Exercício.</b> Pela definição, derive f(x) = x³. (Expanda (a+h)³ com binômio: a³ + 3a²h + 3ah² + h³.)</p>`,
  review:"Por que a divisão por h não explode no limite da definição de derivada?"},
 {id:"l4", sub:"gravitacao", n:"Órbita é queda que erra o alvo para sempre", lvl:"Nível 5",
  tags:"intuição · física · pensamento newtoniano",
  body:`<p><b>Intuição.</b> Atire uma bola forte: ela cai mais longe. Atire *muito* forte: a Terra curva, mas a bola também cai... se a velocidade lateral for certa, a bola cai *na mesma taxa em que a Terra foge*. Isso é uma órbita.</p>
  <p><b>Formalização.</b> A Lua cai em direção à Terra com aceleração centrípeta a = v²/r ≈ 0,0027 m/s² (por isso ninguém percebe que ela 'cai'). Newton uniu a maçã e a Lua: a mesma gravidade.</p>
  <div class="form">v_orbital = √(GM/r)</div>
  <p><b>Derivação.</b> Gravidade vira força centrípeta: GMm/r² = mv²/r → v² = GM/r. A velocidade orbital *não depende da massa do satélite*: a estação e o astronauta orbitam juntos, por isso flutuam um em relação ao outro.</p>
  <p><b>Exercício.</b> Se o raio da órbita dobra, a velocidade orbital muda por qual fator? (use a fórmula derivada, não decore)</p>`,
  review:"Por que astronauta e estação não se afastam nem se aproximam?"},
 {id:"l5", sub:"estequiometria", n:"Balancear é conservar átomos", lvl:"Nível 4",
  tags:"formalização · conservação · aplicação",
  body:`<p><b>Intuição.</b> Equação química é uma contabilidade: cada átomo que entra tem que sair. Balancear é fechar o caixa.</p>
  <p><b>Formalização.</b> Lei de Lavoisier (conservação da massa) exige, para cada elemento, número de átomos igual nos dois lados:</p>
  <div class="form">C₃H₈ + 5 O₂ → 3 CO₂ + 4 H₂O</div>
  <p><b>Método.</b> Balanceie o elemento mais 'preso' (C, H), deixe O e H-livre por último, termine com O₂. Confira: C 3=3, H 8=8, O 10=10 ✓</p>
  <p><b>Aplicação.</b> Queimando 1 mol de propano (44 g), quantos gramas de CO₂ saem? 3 mol × 44 g/mol = 132 g. A estequiometria transforma contas de átomos em previsões de laboratório.</p>
  <p><b>Exercício.</b> Balanceie: C₄H₁₀ + O₂ → CO₂ + H₂O.</p>`,
  review:"O que o balanceamento afirma sobre os átomos, fisicamente?"},
 {id:"l6", sub:"ciencia", n:"Hipótese, teoria, lei — e como se sabe", lvl:"Nível 4",
  tags:"método científico · epistemologia",
  body:`<p><b>Distinção.</b> Hipótese: conjectura testável ('vibrazione do vento derruba pontes'). Teoria: estrutura explicativa corroborada por muitas linhas de evidência (evolução, relatividade). Lei: regularidade descritiva, geralmente matemática (Lei de Ohm: V = RI).</p>
  <p><b>Teoria não 'vira' lei.</b> São papéis diferentes: a lei descreve *como* o fenômeno se comporta; a teoria explica *por quê*. Nenhuma é 'comprovada' — ciência não prova, ela corrobora até alguém achar o contraexemplo.</p>
  <p><b>Como se sabe.</b> Evidência se avalia por: previsões arriscadas (que dariam pra estar erradas), replicação independente, e concorrência com hipóteses rivais (navalha: a teoria boa sobrevive a testes que matam as rivais).</p>
  <p><b>Exercício.</b> 'Fumantes têm mais câncer de pulmão.' Que desenho de estudo distinguiria causalidade de mera correlação? O que um confounder poderia fazer aqui?</p>`,
  review:"Por que 'é só uma teoria' é um erro de entendimento do que é teoria?"},
];

/* ─────────── ESTADO ─────────── */
let ST = load("academia", {answers:{}, done:false, review:{}});
function load(k,d){ try{ return JSON.parse(localStorage.getItem(k)) || d; }catch(e){ return d; } }
function save(){ localStorage.setItem("academia", JSON.stringify(ST)); }
function esc(s){ return String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c])); }
function toast(m){ const t=document.getElementById("toast"); t.textContent=m; t.style.display="block"; clearTimeout(t._h); t._h=setTimeout(()=>t.style.display="none",3500); }

/* pontos por questão */
const PTS = { alone:2, hint:1.2, sol:0.3, selfOk:2, selfHint:1.2, selfNo:0 };

/* nível 0–6 do assunto */
function subjectLevels(){
  const agg = {};
  for (const q of QUESTIONS){
    if (!(q.sub in agg)) agg[q.sub] = {pts:0, max:0};
    agg[q.sub].max += 2;
    const a = ST.answers[q.id];
    if (a) agg[q.sub].pts += a.pts || 0;
  }
  const out = {};
  for (const s in agg) out[s] = Math.round(6 * agg[s].pts / agg[s].max);
  return out;
}

/* status na trilha */
function trailStatus(){
  const lv = subjectLevels();
  const st = {};
  const lvlOf = (dep) => (dep in SUBJ) ? (lv[dep]||0) : (st[dep] && st[dep] >= 3 ? 6 : 0);
  for (const t of TRAIL){
    const missing = t.deps.filter(d => lvlOf(d) < 3);
    st[t.id] = missing.length ? 0 : 3;
    st[t.id + "_missing"] = missing;
  }
  return st;
}

/* ─────────── DIAGNÓSTICO ─────────── */
const BLKS = {A:"Matemática", B:"Física", C:"Química", D:"Computação e algoritmos", E:"Pensamento científico"};
let cur = 0;

function startDiag(){
  document.getElementById("diagIntro").classList.add("hidden");
  document.getElementById("diagArea").classList.remove("hidden");
  cur = QUESTIONS.findIndex(q => !ST.answers[q.id]);
  if (cur < 0) cur = 0;
  renderQ();
}
function renderQ(){
  const q = QUESTIONS[cur];
  const done = QUESTIONS.filter(x => ST.answers[x.id]).length;
  document.getElementById("diagArea").innerHTML = `
    <div class="bar"><i style="width:${(100*done/QUESTIONS.length)}%"></i></div>
    <div class="qtag">BLOCO ${q.blk} · ${BLKS[q.blk]} · ${q.id} · nível ${q.lvl} · ${done}/${QUESTIONS.length}</div>
    <div class="card">
      <div class="qtext">${q.q.replace(/\*\*(.+?)\*\*/g,"<b>$1</b>").replace(/\*(.+?)\*/g,"<i>$1</i>")}</div>
      <div id="qbody"></div>
      <div class="hint" id="hint1">${q.hints[0] || ""}</div>
      <div class="hint" id="hint2">${q.hints[1] || ""}</div>
      <div class="sol" id="sol">${q.sol.replace(/\*\*(.+?)\*\*/g,"<b>$1</b>").replace(/\n/g,"<br>")}</div>
      <div id="fb"></div>
    </div>
    <button class="btn ghost mini" onclick="nextQ()">${ST.answers[q.id] ? "próxima →" : "pular (não sei) →"}</button>`;
  renderInput(q);
}
function renderInput(q){
  const body = document.getElementById("qbody");
  if (q.type === "mc"){
    body.innerHTML = q.opts.map((o,i)=>`<button class="opt" onclick="pick(${i})">${esc(o)}</button>`).join("");
  } else if (q.type === "num"){
    body.innerHTML = `<input class="num" id="nin" type="text" inputmode="decimal" placeholder="sua resposta…">
      <button class="btn mini" onclick="checkNum()">verificar</button>`;
  } else {
    body.innerHTML = `<p class="muted">Resolva no papel / no seu editor. Depois avalie você mesmo — com honestidade científica:</p>
      <button class="btn mini" onclick="self(2)">✓ acertei sozinho</button>
      <button class="btn ghost mini" onclick="self(1.2)">acertei com pista</button>
      <button class="btn ghost mini" onclick="self(0)">não sabia</button>`;
  }
}
let usedHints = 0;
function showHint(){
  const q = QUESTIONS[cur];
  usedHints++;
  if (usedHints === 1) document.getElementById("hint1").classList.add("show");
  if (usedHints >= 2){ document.getElementById("hint2").classList.add("show"); }
  if (usedHints >= q.hints.length) showSol();
  ST.answers[q.id] = ST.answers[q.id] || {pts:PTS.hint, with:"hint"};
  save();
}
function showSol(){
  document.getElementById("sol").classList.add("show");
  const q = QUESTIONS[cur];
  ST.answers[q.id] = {pts:PTS.sol, with:"sol"};
  save();
}
function pick(i){
  const q = QUESTIONS[cur];
  const btns = document.querySelectorAll(".opt");
  btns.forEach((b,idx)=>{ b.classList.add(idx===q.ans ? "correct" : (idx===i ? "wrong" : "dim")); b.disabled = true; });
  const ok = i === q.ans;
  const wasAnswered = ST.answers[q.id];
  ST.answers[q.id] = {pts: ok ? (wasAnswered ? wasAnswered.pts : PTS.alone) : (wasAnswered ? wasAnswered.pts : 0), with: ok ? "ok" : "no"};
  save();
  document.getElementById("fb").innerHTML = ok
    ? `<p class="feedback fb-ok">✓ Correto!</p>` + (i===q.ans ? `<button class="btn mini" onclick="nextQ()">próxima →</button>` : "")
    : `<p class="feedback fb-no">✗ Não foi essa. Peça a pista 1 e tente de novo — o raciocínio importa mais que a resposta.</p>
       <button class="btn ghost mini" onclick="retryHint()">pedir pista</button>`;
}
function retryHint(){ showHint(); const q = QUESTIONS[cur]; if (q.type==="mc") setTimeout(renderInput, 100); }
function checkNum(){
  const q = QUESTIONS[cur];
  const v = parseFloat(document.getElementById("nin").value.replace(",", "."));
  const ok = !isNaN(v) && Math.abs(v - q.ans) < 0.001 * Math.max(1, Math.abs(q.ans));
  const wasAnswered = ST.answers[q.id];
  ST.answers[q.id] = {pts: ok ? (wasAnswered ? wasAnswered.pts : PTS.alone) : (wasAnswered ? wasAnswered.pts : 0), with: ok ? "ok" : "no"};
  save();
  document.getElementById("fb").innerHTML = ok
    ? `<p class="feedback fb-ok">✓ Correto: ${q.ans}</p><button class="btn mini" onclick="nextQ()">próxima →</button>`
    : `<p class="feedback fb-no">✗ Ainda não. Peça a pista e tente outra vez.</p>
       <button class="btn ghost mini" onclick="showHint()">pista 1</button>
       <button class="btn ghost mini" onclick="nextQ()">não sei, próxima →</button>`;
}
function self(p){
  const q = QUESTIONS[cur];
  const map = {2:"selfOk", 1.2:"selfHint", 0:"selfNo"};
  ST.answers[q.id] = {pts:p, with:map[p]};
  save();
  document.getElementById("fb").innerHTML = `<p class="feedback ${p>0 ? "fb-ok" : "fb-no"}">${p===2 ? "✓ Registrado: domínio." : p>0 ? "✓ Registrado: com apoio." : "— Registrado: lacuna (era o que eu precisava saber)."}</p>`;
  document.getElementById("sol").classList.add("show");
  document.getElementById("fb").innerHTML += `<button class="btn mini" onclick="nextQ()">próxima →</button>`;
}
function nextQ(){
  ST.answers[QUESTIONS[cur].id] = ST.answers[QUESTIONS[cur].id] || {pts:0, with:"skip"};
  save();
  const firstUn = QUESTIONS.findIndex(q => !ST.answers[q.id]);
  if (firstUn < 0){ finishDiag(); return; }
  cur = firstUn; usedHints = 0;
  renderQ();
}
function finishDiag(){
  ST.done = true; save();
  document.getElementById("diagArea").innerHTML = `<div class="card"><h3>✓ Diagnóstico concluído</h3>
    <p>Seu mapa e sua trilha foram gerados. Abra as abas <b>Mapa</b> e <b>Trilha</b>.</p>
    <p class="muted">As respostas erradas *não foram corrigidas ainda* — esse é o trabalho da aula com o professor no chat, com pistas graduais.</p></div>`;
  renderMap(); renderTrail(); renderReviewInfo();
}

/* ─────────── MAPA ─────────── */
function renderMap(){
  const lv = subjectLevels();
  const rows = Object.keys(SUBJ).map(s=>{
    const v = lv[s]||0;
    const bars = Array.from({length:6},(_,i)=>`<i class="${i < v ? (v>=3?"ok":"on") : ""}"></i>`).join("");
    const tag = v===0 ? '<span class="chip r">0 · desconhecido</span>' :
      v===1 ? '<span class="chip o">1 · reconhecimento</span>' :
      v===2 ? '<span class="chip y">2 · compreensão</span>' :
      v===3 ? '<span class="chip c">3 · aplicação</span>' :
      v===4 ? '<span class="chip c">4 · domínio</span>' :
      `<span class="chip g">${v} · avançado</span>`;
    return `<div class="subjrow"><div><div class="nm">${SUBJ[s].n}</div><div class="ar">${SUBJ[s].a}</div></div>
      <div>${tag}<span class="lvbar">${bars}</span></div></div>`;
  }).join("");
  document.getElementById("mapArea").innerHTML = ST.done || Object.keys(ST.answers).length ? rows
    : `<div class="card muted">Complete o diagnóstico para gerar seu mapa.</div>`;
}

/* ─────────── TRILHA ─────────── */
function renderTrail(){
  const st = trailStatus();
  const lv = subjectLevels();
  document.getElementById("trailArea").innerHTML = TRAIL.map(t=>{
    const s = st[t.id];
    const cls = s>=3 ? "open" : "lock";
    const chip = s>=3 ? '<span class="chip c">▶ desbloqueada</span>' : '<span class="chip r">🔒 pré-requisitos</span>';
    const deps = t.deps.map(d=>{
      const nm = (d in SUBJ) ? SUBJ[d].n : (TRAIL.find(x=>x.id===d)||{n:d}).n;
      const v = (d in SUBJ) ? (lv[d]||0) : (st[d]>=3 ? 6 : 0);
      return `${nm} ${v>=3 ? "✓" : "(nível "+v+")"}`;
    }).join(" · ");
    return `<div class="tnode ${cls}"><div class="th"><h3>${t.n}</h3>${chip}</div><div class="deps">Pré-requisitos: ${deps}</div></div>`;
  }).join("") + `<div class="card muted">Cada etapa abre com nível ≥ 3 (aplicação) em *todos* os pré-requisitos. A ordem não é estética: cada degrau é o instrumento matemático do próximo.</div>`;
}

/* ─────────── AULAS ─────────── */
function renderAulas(){
  const lv = subjectLevels();
  document.getElementById("aulasArea").innerHTML = LESSONS.map(L=>{
    const ok = (lv[L.sub]||0) >= 2 || ST.done;
    return `<div class="lesson" id="ls-${L.id}">
      <div class="lh" onclick="toggleLesson('${L.id}')"><h3>${L.n}</h3><span class="muted">${ok ? "▾" : "🔒"}</span></div>
      <div class="lb" id="lb-${L.id}">
        <div class="chip c">${L.lvl} · ${SUBJ[L.sub].n}</div>
        <div class="muted" style="font-family:var(--mono);font-size:11px;margin:6px 0">${L.tags}</div>
        ${ok ? L.body : `<p>🔒 Complete o diagnóstico para abrir esta aula.</p>`}
        ${ok ? `<button class="btn mini" onclick="addReview('${L.id}')">+ agendar revisão</button>` : ""}
      </div></div>`;
  }).join("");
}
function toggleLesson(id){
  const lb = document.getElementById("lb-"+id);
  const open = lb.style.display === "block";
  lb.style.display = open ? "none" : "block";
  document.getElementById("ls-"+id).classList.toggle("open", !open);
}
/* ─────────── REVISÃO ESPAÇADA ─────────── */
const INTERVALS = [1,3,7,14,30,60]; // dias
function addReview(lessonId){
  const L = LESSONS.find(x=>x.id===lessonId);
  ST.review[L.sub] = {due: Date.now(), idx:0, prompt:L.review};
  save(); renderReviewInfo(); toast("revisão agendada: " + SUBJ[L.sub].n);
}
function renderReviewInfo(){
  const due = Object.keys(ST.review).filter(s => ST.review[s].due <= Date.now());
  document.getElementById("reviewInfo").innerHTML = due.length
    ? `<b>${due.length}</b> assunto(s) para revisar hoje: ${due.map(s=>SUBJ[s].n).join(", ")}. A revisão espaçada (1→3→7→14→30→60 dias) move o conhecimento para a memória de longo prazo.`
    : `Nada vencido hoje. Agende revisões nas aulas (botão '+ agendar revisão').`;
}
function renderReviewArea(){
  const due = Object.keys(ST.review).filter(s => ST.review[s].due <= Date.now());
  if (!due.length){ document.getElementById("reviewArea").innerHTML = `<div class="card muted">Fila vazia.</div>`; return; }
  const s = due[0], r = ST.review[s];
  document.getElementById("reviewArea").innerHTML = `<div class="card">
    <div class="qtag">REVISÃO ATIVA · ${SUBJ[s].n}</div>
    <div class="qtext">${r.prompt}</div>
    <p class="muted">Responda de memória, sem consultar. Depois compare com a aula de origem.</p>
    <button class="btn mini" onclick="gradeReview('${s}',true)">✓ lembrei</button>
    <button class="btn ghost mini" onclick="gradeReview('${s}',false)">✗ não lembrei</button></div>`;
}
function gradeReview(s, ok){
  const r = ST.review[s];
  r.idx = ok ? Math.min(r.idx+1, INTERVALS.length-1) : 0;
  r.due = Date.now() + INTERVALS[r.idx]*86400000;
  save(); renderReviewInfo(); renderReviewArea();
  toast(ok ? "próxima revisão em "+INTERVALS[r.idx]+" dias" : "revisão reiniciada: 1 dia");
}

/* ─────────── NAV ─────────── */
function show(v){
  document.querySelectorAll(".view").forEach(x=>x.classList.remove("active"));
  document.getElementById("view-"+v).classList.add("active");
  document.querySelectorAll("nav button").forEach(b=>b.classList.toggle("active", b.dataset.view===v));
  window.scrollTo(0,0);
  if (v==="map") renderMap();
  if (v==="trail") renderTrail();
  if (v==="aulas") renderAulas();
  if (v==="review"){ renderReviewInfo(); renderReviewArea(); }
}
if (typeof document !== "undefined") {
document.querySelectorAll("nav button").forEach(b=>b.onclick=()=>show(b.dataset.view));
document.getElementById("startDiag").onclick = startDiag;
if (Object.keys(ST.answers).length){
  document.getElementById("diagResume").innerHTML = `<button class="btn ghost mini" onclick="startDiag()">continuar diagnóstico (${QUESTIONS.length - Object.keys(ST.answers).length} restantes)</button>`;
}
renderMap(); renderTrail();


}

/* export p/ testes */
if (typeof module !== "undefined") module.exports = { subjectLevels, trailStatus, PTS };
