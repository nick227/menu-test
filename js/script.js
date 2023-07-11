function setupMenus() {
  attachExamples();
  addGlobalCloseListener(['.example', '.menu', '.submenu']);
}

function createButton(button) {
  const buttonElm = document.createElement('button');
  buttonElm.title = button.text;
  buttonElm.dataset.buttonId = button.id;
  buttonElm.addEventListener("click", handleMenuButtonClick);
  if (button.iconClass) buttonElm.appendChild(createIcon(button.iconClass));
  else buttonElm.textContent = button.text;
  return buttonElm;
}

function createIcon(className) {
  const icon = document.createElement('i');
  icon.className = className;
  return icon;
}

function createSubmenu(parentId, buttons) {
  const submenuWrapper = document.createElement('div');
  submenuWrapper.className = 'submenu';
  submenuWrapper.dataset.parentId = parentId;
  buttons.forEach(button => submenuWrapper.appendChild(createButton(button)));
  return submenuWrapper;
}

function attachMenu(key, parentContainer) {
  const currentObj = global_menus[key];
  const menuElm = document.createElement('div');
  menuElm.className = 'menu';
  currentObj.forEach(button => {
    const buttonElm = createButton(button);
    if (button.children) parentContainer.appendChild(createSubmenu(button.id, button.children));
    else if (button.html) {
      const submenuWrapper = document.createElement('div');
      submenuWrapper.className = 'submenu';
      submenuWrapper.dataset.parentId = button.id;
      submenuWrapper.innerHTML = button.html;
      parentContainer.appendChild(submenuWrapper);
    }
    menuElm.appendChild(buttonElm);
  });
  parentContainer.appendChild(menuElm);
}

function showSubmenu(event) {
  document.querySelectorAll('.submenu').forEach(el => (el.style.display = 'none'));
  const buttonId = event.currentTarget.dataset.buttonId;
  const submenu = document.querySelector(`.submenu[data-parent-id="${buttonId}"]`);
  submenu.style.display = 'flex';
}

function handleExampleClick(event) {
  closeAllMenus();
  const key = event.currentTarget.dataset.key;
  attachMenu(key, event.currentTarget);
}

function handleMenuButtonClick(event) {
  event.preventDefault();
  event.stopPropagation();
  const isSubmenu = event.currentTarget.closest('.submenu');
  if (!isSubmenu) showSubmenu(event);
}

function addGlobalCloseListener(selectors) {
  document.addEventListener('click', (event) => {
    const isMatch = selectors.some(selector => event.target.closest(selector));
    if (!isMatch) closeAllMenus();
  });
}

function closeAllMenus() {
  document.querySelectorAll('.menu, .submenu').forEach(el => el.remove());
}

function attachExamples() {
  Object.keys(global_menus).forEach(key => attachExample(key));
}

function attachExample(key) {
  const elm = document.createElement('div');
  elm.classList.add('example', key);
  elm.dataset.key = key;
  elm.innerHTML = key;
  document.body.appendChild(elm);
  elm.addEventListener('click', handleExampleClick);
}

document.addEventListener('DOMContentLoaded', setupMenus);