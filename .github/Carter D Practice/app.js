// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const navList = document.getElementById('nav-menu');
if (toggle && navList){
  toggle.addEventListener('click', () => {
    const open = navList.classList.toggle('show');
    toggle.setAttribute('aria-expanded', String(open));
  });
}

// Demo form handling
function toast(msg){
  const t = document.createElement('div');
  t.textContent = msg;
  t.style.position = 'fixed';
  t.style.bottom = '18px';
  t.style.right  = '18px';
  t.style.background = 'white';
  t.style.border = '1px solid #E7EBE7';
  t.style.borderRadius = '12px';
  t.style.boxShadow = '0 10px 30px rgba(0,0,0,.08)';
  t.style.padding = '10px 14px';
  t.style.zIndex = 9999;
  document.body.appendChild(t);
  setTimeout(()=> t.remove(), 2500);
}

document.querySelectorAll('form').forEach(f => {
  if (f.classList.contains('filter-row')) return; // Skip the search form
  f.addEventListener('submit', (e) => {
    e.preventDefault();
    toast('Thanks! We received your request.');
  });
});

// Search form handling
const searchForm = document.querySelector('.filter-row');
if (searchForm) {
  searchForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default navigation
    console.log('Search form submitted.');
    applyFilters();
    updateURL(readUIState());
  });
} else {
  console.error('Search form not found. Ensure the form has the class "filter-row".');
}

const searchInput = document.getElementById('cond-search');
const conditionsGrid = document.querySelector('.conditions-grid');

if (searchInput && conditionsGrid) {
  searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    const items = conditionsGrid.querySelectorAll('.condition-tile');

    items.forEach(item => {
      const tags = item.getAttribute('data-tags') || '';
      const keywords = item.getAttribute('data-keywords') || '';
      const text = `${tags} ${keywords}`.toLowerCase();

      if (text.includes(query)) {
        item.style.display = '';
      } else {
        item.style.display = 'none';
      }
    });
  });
} else {
  console.error('Search input or conditions grid not found.');
}
