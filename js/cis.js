// static/js/spotlight.js

const spotlightPool = [
    {
        name: "Dr. Carol Buse",
        title: "Professor",
        type: "fulltime",
        image: "static/images/full_time_faculty/carol_buse.jpg",
        answers: [
            "Python — it’s clean, powerful, and used everywhere from data science to web development.",
            "Building a full-stack inventory management system with my students last semester.",
            "Start coding every single day, even if it’s just 15–30 minutes. Consistency beats intensity."
        ]
    },
    {
        name: "Christopher George",
        title: "Instructor – Cybersecurity & Networking",
        type: "fulltime",
        image: "static/images/full_time_faculty/christopher_george.jpg",
        answers: [
            "Kali Linux and Wireshark. They’re the industry standard for penetration testing and network analysis.",
            "Creating a capture-the-flag (CTF) competition for the Bash Script Crazy club.",
            "Get your hands dirty early. Break things, fix them, and document what you learn."
        ]
    },
    {
        name: "Amber Richardson",
        title: "Business & CIS Success Coach",
        type: "support",
        image: "static/images/support_staff/amber_richardson.jpg",
        answers: [
            "I’m not a heavy coder, but I love Microsoft Power Automate and Excel for organizing student plans.",
            "Helping a student who was struggling switch into the Game Design track and seeing them thrive.",
            "Don’t wait until you’re overwhelmed to ask for help. We’re here to support you from day one."
        ]
    },
    // Add the rest of your 17+ people here with their own answers array...
    {
        name: "Lynne Kenney",
        title: "Instructor",
        type: "fulltime",
        image: "static/images/full_time_faculty/lynne_kenney.jpg",
        answers: ["", "", ""]   // Leave empty for now — we'll fill them later
    }
    // ... keep adding more
];

const questionSets = [
    [
        "What’s your favorite programming language or tech tool right now, and why?",
        "What’s the coolest project you’ve worked on recently?",
        "One piece of advice you’d give to new CIS students?"
    ],
    [
        "If you weren’t teaching or working in CIS, what career would you pursue?",
        "What’s your favorite movie, game, or show about technology?",
        "Pineapple on pizza — yes or no?"
    ],
    [
        "What’s one hobby you enjoy outside of tech?",
        "What’s the funniest tech fail or bug you’ve ever experienced?",
        "What superpower would be most useful as a programmer?"
    ],
    [
        "What made you want to teach or support students in CIS?",
        "What’s one thing students are often surprised to learn in your area?",
        "Best study or success tip for CIS students?"
    ]
];

function getCurrentQuestionSet() {
    const month = new Date().getMonth();           // 0 = January, 11 = December
    return questionSets[month % questionSets.length];
}

function getRandomSpotlight(count = 2) {
    const shuffled = [...spotlightPool].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

function renderSpotlight() {
    const container = document.getElementById('spotlight-container');
    if (!container) return;

    const selectedPeople = getRandomSpotlight(2);
    const questions = getCurrentQuestionSet();

    let html = '';

    selectedPeople.forEach(person => {
        html += `
            <div class="col-md-6">
                <div class="faculty-card h-100">
                    <div class="faculty-img-wrapper mx-auto" style="width: 160px; height: 160px; border-radius: 9999px; overflow: hidden;">
                        <img src="${person.image}" 
                             alt="${person.name}" 
                             class="w-100 h-100 object-fit-cover">
                    </div>
                    <h3 class="font-headline fw-bold fs-5 text-center mb-1 mt-4">${person.name}</h3>
                    <p class="text-primary font-label small fw-bold text-center mb-4">${person.title}</p>
                    
                    <div class="px-4 small">
                        <p class="mb-2 fw-bold">1. ${questions[0]}</p>
                        <p class="text-muted mb-4">"${person.answers[0] || 'Answer coming soon...'}"</p>
                        
                        <p class="mb-2 fw-bold">2. ${questions[1]}</p>
                        <p class="text-muted mb-4">"${person.answers[1] || 'Answer coming soon...'}"</p>
                        
                        <p class="mb-2 fw-bold">3. ${questions[2]}</p>
                        <p class="text-muted">"${person.answers[2] || 'Answer coming soon...'}"</p>
                    </div>
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', renderSpotlight);