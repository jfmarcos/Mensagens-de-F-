/* Mensagens de Fé — conteúdo de demonstração e interações do site. */
const messages = [
  {id:1, title:"Confie no tempo de Deus", category:"Fé e esperança", symbol:"✧", art:"faith", excerpt:"Mesmo quando o caminho parece incerto, lembre-se de que você não caminha sozinho. Deus continua presente, fortalecendo seus passos e renovando sua esperança.", reference:"Provérbios 3:5-6", full:"Confie no Senhor de todo o seu coração e não se apoie apenas no seu próprio entendimento. Nem sempre conseguimos enxergar o propósito de cada fase, mas podemos atravessá-las com fé. Respire, ore e continue caminhando: você não está só."},
  {id:2, title:"Comece o dia com gratidão", category:"Bom dia", symbol:"☀", art:"morning", excerpt:"Cada amanhecer é uma nova oportunidade de agradecer, recomeçar e perceber o cuidado de Deus nas pequenas coisas.", reference:"Lamentações 3:22-23", full:"Antes de olhar para as tarefas de hoje, olhe para as bênçãos que já recebeu. Agradeça pelo fôlego, pela oportunidade de recomeçar e pelas pessoas que fazem parte da sua vida. Que a paz de Deus acompanhe cada passo do seu dia."},
  {id:3, title:"Um coração agradecido", category:"Gratidão", symbol:"♡", art:"gratitude", excerpt:"A gratidão não significa que tudo está perfeito. Significa reconhecer que, mesmo em dias difíceis, ainda existem motivos para ter esperança.", reference:"1 Tessalonicenses 5:18", full:"Cultive um coração que percebe a bondade de Deus nas coisas simples. Agradeça pelas portas abertas, pela força nos dias difíceis e pelas lições que ajudam você a crescer. A gratidão muda o jeito de enxergar a jornada."},
  {id:4, title:"Fale com Deus em oração", category:"Orações", symbol:"🙏", art:"prayer", excerpt:"Você não precisa encontrar palavras perfeitas para orar. Fale com sinceridade: Deus conhece seu coração até nos momentos de silêncio.", reference:"Filipenses 4:6-7", full:"Senhor, entrega-nos serenidade para enfrentar este dia, sabedoria para fazer boas escolhas e fé para confiar em Ti. Cuida da nossa família, guia nossos passos e ensina-nos a reconhecer a Tua presença em cada momento. Amém."},
  {id:5, title:"O amor começa em casa", category:"Família", symbol:"⌂", art:"family", excerpt:"Que o amor, o respeito, o perdão e a paciência sejam parte de cada conversa dentro do seu lar. Que Deus fortaleça os laços da sua família.", reference:"1 Coríntios 13:4-7", full:"Que o seu lar seja um lugar onde a escuta seja generosa, o perdão seja sincero e o amor apareça nas atitudes diárias. Ore por sua família, demonstre carinho enquanto há tempo e construa pontes onde houver distância."},
  {id:6, title:"A paz que vem de Deus", category:"Fé e esperança", symbol:"☁", art:"peace", excerpt:"Em meio à correria, reserve um instante para respirar, aquietar o coração e lembrar que você pode entregar suas preocupações a Deus.", reference:"João 14:27", full:"Nem todas as respostas chegam de imediato, mas você pode encontrar descanso enquanto espera. Diminua o ritmo, faça uma oração e cuide do que está ao seu alcance. Que a paz de Cristo guarde seu coração e seus pensamentos."},
  {id:7, title:"Você pode recomeçar", category:"Fé e esperança", symbol:"✦", art:"faith", excerpt:"O ontem faz parte da sua história, mas não precisa definir todos os seus próximos passos. Há espaço para aprender, crescer e começar de novo.", reference:"Isaías 43:19", full:"Não permita que um dia difícil apague a esperança de um novo começo. Aprenda com o passado sem morar nele. Com fé, humildade e perseverança, dê o próximo passo e confie que novos caminhos podem surgir."},
  {id:8, title:"Uma manhã abençoada", category:"Bom dia", symbol:"☼", art:"morning", excerpt:"Que a primeira voz que acalme seu coração hoje seja a esperança. Que suas escolhas sejam guiadas pela bondade e pela sabedoria.", reference:"Salmos 118:24", full:"Bom dia! Que Deus ilumine sua mente, fortaleça seu coração e abençoe o trabalho das suas mãos. Que você encontre motivos para sorrir, coragem para resolver o que for necessário e generosidade para fazer o bem."},
  {id:9, title:"Agradeça pelas pequenas coisas", category:"Gratidão", symbol:"❋", art:"gratitude", excerpt:"Uma conversa acolhedora, uma refeição compartilhada e um instante de paz também são presentes dignos de gratidão.", reference:"Salmos 107:1", full:"Às vezes, as bênçãos mais bonitas chegam sem fazer barulho. Perceba o cuidado presente nas pequenas coisas e não deixe que a pressa roube a alegria de reconhecê-las. Um coração agradecido aprende a enxergar beleza no cotidiano."}
];
const verses = [
  {text:"Entrega o teu caminho ao Senhor; confia nele, e ele tudo fará.", reference:"Salmos 37:5", reflection:"Nem tudo precisa ser resolvido de uma vez. Faça sua parte, entregue suas preocupações a Deus e caminhe com fé, um passo de cada vez."},
  {text:"O Senhor é a minha luz e a minha salvação; a quem temerei?", reference:"Salmos 27:1", reflection:"Quando o medo aparecer, lembre-se de que a coragem pode crescer mesmo em meio às incertezas. Busque direção em Deus e dê o próximo passo com esperança."},
  {text:"Tudo posso naquele que me fortalece.", reference:"Filipenses 4:13", reflection:"A força nem sempre significa fazer tudo sozinho. Também é reconhecer seus limites, pedir ajuda e continuar com a esperança renovada."},
  {text:"O amor é paciente, o amor é bondoso.", reference:"1 Coríntios 13:4", reflection:"Pratique o amor nas pequenas atitudes: escute com atenção, responda com gentileza e escolha o perdão sempre que for possível."},
  {text:"Aquietai-vos e sabei que eu sou Deus.", reference:"Salmos 46:10", reflection:"Faça uma pausa. Nem todo problema precisa ser enfrentado no mesmo instante. Respire, ore e encontre um pouco de quietude."},
  {text:"O choro pode durar uma noite, mas a alegria vem pela manhã.", reference:"Salmos 30:5", reflection:"Uma fase difícil não resume toda a sua história. Permita-se sentir, procure apoio e mantenha viva a esperança de dias melhores."},
  {text:"Confia no Senhor de todo o teu coração.", reference:"Provérbios 3:5", reflection:"Nem sempre entendemos o caminho inteiro. Às vezes, a fé é encontrar coragem para dar apenas o próximo passo."}
];
const messageGrid = document.querySelector("#messageGrid");
const searchInput = document.querySelector("#searchInput");
const categoryButtons = [...document.querySelectorAll("[data-category]")];
const resultCount = document.querySelector("#resultCount");
const emptyState = document.querySelector("#emptyState");
const loadMore = document.querySelector("#loadMore");
const toast = document.querySelector("#toast");
let activeCategory = "Todas";
let visibleCount = 6;
let toastTimer;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
}
function getFilteredMessages() {
  const term = searchInput.value.trim().toLocaleLowerCase("pt-BR");
  return messages.filter(m => {
    const categoryMatch = activeCategory === "Todas" || m.category === activeCategory;
    const text = `${m.title} ${m.category} ${m.excerpt} ${m.reference} ${m.full}`.toLocaleLowerCase("pt-BR");
    return categoryMatch && (!term || text.includes(term));
  });
}
function renderMessages() {
  const filtered = getFilteredMessages();
  const visible = filtered.slice(0, visibleCount);
  messageGrid.innerHTML = visible.map(m => `
    <article class="message-card">
      <div class="message-art art-${m.art}" aria-hidden="true"><span class="art-symbol">${m.symbol}</span></div>
      <div class="message-body">
        <div class="message-meta"><span class="message-tag">${m.category}</span><time>Para refletir</time></div>
        <h3>${escapeHtml(m.title)}</h3>
        <p>${escapeHtml(m.excerpt)}</p>
        <span class="message-reference">${escapeHtml(m.reference)}</span>
        <div class="message-actions">
          <button type="button" data-action="read" data-id="${m.id}">Ler mensagem ↗</button>
          <button type="button" data-action="share" data-id="${m.id}">Compartilhar</button>
        </div>
      </div>
    </article>`).join("");
  resultCount.textContent = `${filtered.length} ${filtered.length === 1 ? "mensagem encontrada" : "mensagens encontradas"}`;
  emptyState.hidden = filtered.length !== 0;
  loadMore.hidden = filtered.length <= visibleCount;
}
function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, ch => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));
}
function messageText(m) { return `${m.title}\n\n${m.full}\n\nReflexão bíblica: ${m.reference}\n\nMensagens de Fé`; }
function shareWhatsApp(text) {
  window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
}
async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    showToast("Texto copiado para compartilhar!");
  } catch {
    const area = document.createElement("textarea");
    area.value = text; area.style.position = "fixed"; area.style.opacity = "0";
    document.body.appendChild(area); area.select();
    const success = document.execCommand("copy"); area.remove();
    showToast(success ? "Texto copiado para compartilhar!" : "Não foi possível copiar automaticamente. Selecione e copie o texto.");
  }
}
function updateDailyVerse() {
  // Escolhe um versículo por dia usando a data local, de modo que todos os visitantes
  // vejam a mesma seleção naquela data e o conteúdo rode automaticamente ao longo dos dias.
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const dayOfYear = Math.floor((now - start) / 86400000);
  const verse = verses[dayOfYear % verses.length];
  document.querySelector("#dailyVerse").textContent = `“${verse.text}”`;
  document.querySelector("#dailyReference").textContent = verse.reference;
  document.querySelector("#dailyReflection").textContent = verse.reflection;
  document.querySelector("#todayDate").textContent = now.toLocaleDateString("pt-BR", {day:"numeric", month:"long", year:"numeric"});
  document.querySelector("#year").textContent = now.getFullYear();
  return verse;
}
let currentVerse = updateDailyVerse();
document.querySelector("#shareVerse").addEventListener("click", () => shareWhatsApp(`${currentVerse.text}\n— ${currentVerse.reference}\n\n${currentVerse.reflection}\n\nCompartilhado por Mensagens de Fé`));
document.querySelector("#copyVerse").addEventListener("click", () => copyText(`${currentVerse.text}\n— ${currentVerse.reference}\n\n${currentVerse.reflection}`));
searchInput.addEventListener("input", () => { visibleCount = 6; renderMessages(); });
categoryButtons.forEach(button => button.addEventListener("click", () => {
  activeCategory = button.dataset.category;
  categoryButtons.forEach(b => b.classList.toggle("active", b === button));
  visibleCount = 6;
  renderMessages();
  document.querySelector("#mensagens").scrollIntoView({behavior:"smooth", block:"start"});
}));
document.querySelector("#clearFilters").addEventListener("click", () => {
  activeCategory = "Todas"; searchInput.value = ""; visibleCount = 6;
  categoryButtons.forEach(b => b.classList.toggle("active", b.dataset.category === "Todas"));
  renderMessages();
});
loadMore.addEventListener("click", () => { visibleCount += 3; renderMessages(); });
messageGrid.addEventListener("click", event => {
  const button = event.target.closest("button[data-action]");
  if (!button) return;
  const m = messages.find(item => item.id === Number(button.dataset.id));
  if (!m) return;
  if (button.dataset.action === "share") shareWhatsApp(messageText(m));
  if (button.dataset.action === "read") {
    showToast(`${m.title} — ${m.full}`);
  }
});
const menuToggle = document.querySelector("#menuToggle");
const mainNav = document.querySelector("#mainNav");
menuToggle.addEventListener("click", () => {
  const open = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
  menuToggle.textContent = open ? "×" : "☰";
});
mainNav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  mainNav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Abrir menu");
  menuToggle.textContent = "☰";
}));
renderMessages();
