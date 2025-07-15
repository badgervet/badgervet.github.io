// --- START OF FILE cis.js ---

// Array of excluded dates in YYYY-MM-DD format
const excludedDates = [
    '2025-05-13', // Summer Break
    '2025-05-27', // Summer Break
    '2025-08-12', 
    '2025-08-26', // First week of the Fall 2025 Semester
];

// Function to check if a date is excluded
function isExcludedDate(date) {
    const formattedDate = date.toISOString().split('T')[0]; // Convert to YYYY-MM-DD
    return excludedDates.includes(formattedDate);
}

function getNextMeetingDate() {
    const today = new Date(); // Use current date
    let current = new Date(today);
    current.setDate(1); // Start search from 1st of current month

    for (let i = 0; i < 12; i++) { // Search next 12 months
        const month = current.getMonth();
        const year = current.getFullYear();
        const inSemester = (month >= 0 && month <= 4) || (month >= 7 && month <= 11);

        if (inSemester) {
            const tuesdays = [];
            let d = new Date(year, month, 1);
            let dayOfWeek = d.getDay();
            let daysToAdd = (2 - dayOfWeek + 7) % 7;
            d.setDate(d.getDate() + daysToAdd);

            while (d.getMonth() === month) {
                tuesdays.push(new Date(d));
                d.setDate(d.getDate() + 7);
            }

            const todayDateOnly = new Date(today.getFullYear(), today.getMonth(), today.getDate());

            // Check second Tuesday
            if (tuesdays.length >= 2) {
                const second = tuesdays[1];
                const secondDateOnly = new Date(second.getFullYear(), second.getMonth(), second.getDate());
                if (secondDateOnly >= todayDateOnly && !isExcludedDate(second)) {
                    return second.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
                }
            }

            // Check fourth Tuesday
            if (tuesdays.length >= 4) {
                const fourth = tuesdays[3];
                const fourthDateOnly = new Date(fourth.getFullYear(), fourth.getMonth(), fourth.getDate());
                if (fourthDateOnly >= todayDateOnly && !isExcludedDate(fourth)) {
                    return fourth.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
                }
            }
        }
        current.setDate(1);
        current.setMonth(current.getMonth() + 1);
    }
    return "TBD - Check Back Soon";
}

// --- Combined DOMContentLoaded Listener ---
document.addEventListener('DOMContentLoaded', () => {

  // 1. Set Next Meeting Date
  const nextMeetingElement = document.getElementById('nextMeetingDate');
  if (nextMeetingElement) {
      nextMeetingElement.textContent = getNextMeetingDate();
  } else {
      console.error("Element with ID 'nextMeetingDate' not found.");
  }

  // 2. Force Navbar Collapse on Link Click
  const navbarCollapsible = document.getElementById('navbarNavAltMarkup');
  const navLinks = document.querySelectorAll('#navbarNavAltMarkup .navbar-nav a.nav-link[href^="#"]');

  if (navbarCollapsible) {
      navLinks.forEach(link => {
          link.addEventListener('click', (e) => { // Added event object 'e'
              const isMobile = window.getComputedStyle(document.querySelector('.navbar-toggler')).display !== 'none';
              if (isMobile && navbarCollapsible.classList.contains('show')) {
                   const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapsible) || new bootstrap.Collapse(navbarCollapsible, { toggle: false });
                   bsCollapse.hide();
              }
              // Optional: Smooth scroll for internal links if needed, though CSS handles it
              // let hash = link.hash;
              // let targetElement = document.querySelector(hash);
              // if (targetElement) {
              //     e.preventDefault(); // Prevent default jump
              //     targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
              // }
          });
      });
  } else {
       console.error("Navbar collapse element with ID 'navbarNavAltMarkup' not found.");
  }

  // REMOVED: Manual Scrollspy class adding logic. Rely on Bootstrap's data-bs-spy attribute.
  // Ensure <body data-bs-spy="scroll" data-bs-target="#navbarNavAltMarkup" data-bs-offset="90"> is present
  // The data-bs-offset should match or exceed the sticky top offset (90px from CSS).

});
// --- END OF FILE cis.js ---