const chatBox = document.getElementById('chatMessages');
const chatInput = document.getElementById('chatInput');
const sendChat = document.getElementById('sendChat');
let chatHistory = [];

function addChatBubble(text, role) {
  const bubble = document.createElement('div');
  bubble.className = 'chat-bubble ' + role;
  bubble.textContent = text;
  chatBox.appendChild(bubble);
  chatBox.scrollTop = chatBox.scrollHeight;
  return bubble;
}
async function submitChat(text) {
  const message = (text || chatInput.value).trim();
  if (!message || sendChat.disabled) return;
  addChatBubble(message, 'user');
  chatInput.value = '';
  sendChat.disabled = true;
  sendChat.textContent = '...';
  const pending = addChatBubble('Szukam informacji i układam odpowiedź…', 'assistant');
  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        message,
        history: chatHistory.slice(-10),
        place: document.getElementById('placeLabel').textContent,
        budget: 150,
        people: 2
      })
    });
    const data = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(data.error || 'Nie udało się połączyć z asystentem.');
    pending.textContent = data.reply || 'Nie otrzymałem odpowiedzi. Spróbuj ponownie.';
    chatHistory.push({role:'user', content:message}, {role:'assistant', content:pending.textContent});
    chatHistory = chatHistory.slice(-12);
  } catch (err) {
    pending.textContent = 'Błąd: ' + err.message + ' Sprawdź konfigurację API i spróbuj ponownie.';
  } finally {
    sendChat.disabled = false;
    sendChat.textContent = 'Wyślij';
    chatBox.scrollTop = chatBox.scrollHeight;
  }
}
sendChat.addEventListener('click', () => submitChat());
chatInput.addEventListener('keydown', e => {
  if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); submitChat(); }
});
document.querySelectorAll('.suggestion').forEach(btn => btn.addEventListener('click', () => submitChat(btn.dataset.prompt)));
