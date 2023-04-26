const listaItens = [
  "Gorjola",
  "Gorjola Mirim",
  "Gorjola Assu",
  "Gorjola Atan",
  "Arranca-Língua",
  "Arranca-Língua Assu",
  "Arranca-Língua Atan",
  "Arranca-Língua das Cavernas",
  "Arranca-Língua das Cavernas Mirim",
  "Arranca-Língua das Cavernas Assu",
  "Arranca-Língua das Cavernas Atan",
  "Boitatá",
  "Boitatá Mirim",
  "Boitatá Assu",
  "Boitatá Atan",
  "Cupendi das Cavernas",
  "Cupendi das Cavernas Mirim",
  "Cupendi das Cavernas Assu",
  "Cupendi das Cavernas Atan",
  "Cupendi das Montanhas Atan",
  "Olhos de Escorpião das Sombras Atan"
];

const checklistContainer = document.getElementById('checklist-container');

listaItens.forEach(item => {
  const div = document.createElement('div');
  div.className = 'checklist-item';
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.id = item;
  checkbox.name = item;
  checkbox.value = item;
  checkbox.checked = localStorage.getItem(item) === 'true';
  checkbox.addEventListener('change', () => {
    localStorage.setItem(item, checkbox.checked);
  });
  const label = document.createElement('label');
  label.htmlFor = item;
  label.appendChild(document.createTextNode(item));
  div.appendChild(checkbox);
  div.appendChild(label);
  checklistContainer.appendChild(div);
});
