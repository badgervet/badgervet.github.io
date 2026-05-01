// ==================== SOFTWARE DATA ====================
const softwarePool = [
    {
        name: "Python",
        desc: "High-level programming language for general-purpose programming and data science.",
        category: "programming",
        logo: "static/images/software/python-logo-large.png",
        linkText: "Download",
        linkIcon: "download",
        downloadUrl: "https://www.python.org/downloads/"   // Official site (auto-detects OS)
    },
    {
        name: "VS Code",
        desc: "Modern code editor redefined and optimized for building and debugging web and cloud apps.",
        category: "web",
        logo: "static/images/software/Visual-Studio-Code_Icon.svg",
        linkText: "Download",
        linkIcon: "download",
        downloadUrl: "https://visualstudio.microsoft.com/thank-you-downloading-visual-studio/?sku=Community&channel=Stable&version=VS18&source=VSLandingPage&cid=2500&passive=false"
    },
    {
        name: "Visual Studio",
        desc: "Modern code editor redefined and optimized for building and debugging web and cloud apps.",
        category: "game",
        logo: "static/images/software/visual_studio.svg",
        linkText: "Download",
        linkIcon: "rectangle_add",
        downloadUrl: "https://code.visualstudio.com/"
    },
    {
        name: "Git",
        desc: "Distributed version control system to track changes in source code during development.",
        category: "util",
        logo: "static/images/software/git.png",
        linkText: "Download",
        linkIcon: "download",
        downloadUrl: "https://git-scm.com/downloads"
    },
    {
        name: "Packet Tracer",
        desc: "Powerful network simulation tool for practicing configuration and troubleshooting.",
        category: "cyber",
        logo: "static/images/software/cisco_packet_tracer_icon.png",
        linkText: "Get Student License",
        linkIcon: "verified",
        downloadUrl: "https://www.netacad.com/resources/lab-downloads"   // Cisco NetAcad
    },
    {
        name: "VirtualBox",
        desc: "Powerful x86 and AMD64/Intel64 virtualization product for enterprise and home use.",
        category: "util",
        logo: "static/images/software/vbox-new-logo.png",
        linkText: "Download",
        linkIcon: "download",
        downloadUrl: "https://www.virtualbox.org/wiki/Downloads"
    },
    {
        name: "Wireshark",
        desc: "The world's foremost network protocol analyzer.",
        category: "cyber",
        logo: "static/images/software/wireshark-logo.png",
        linkText: "Download",
        linkIcon: "download",
        downloadUrl: "https://www.wireshark.org/download.html"
    },
    {
        name: "MySQL",
        desc: "The world's most popular open source database, widely used in web development.",
        category: "programming",
        logo: "static/images/software/mysql.webp",
        linkText: "Download",
        linkIcon: "download",
        downloadUrl: "https://dev.mysql.com/downloads/installer/"
    },
    {
        name: "Notepad++",
        desc: "A free source code editor and Notepad replacement that supports several languages.",
        category: "web",
        logo: "static/images/software/notepad++_logo.svg",
        linkText: "Download",
        linkIcon: "rectangle_add",
        downloadUrl: "https://notepad-plus-plus.org/"
    },
    {
        name: "Autopsy",
        desc: "Digital forensics platform for analyzing hard drives, smartphones, and more.",
        category: "cyber",
        logo: "static/images/software/autopsy-logo.svg",
        linkText: "Download",
        linkIcon: "rectangle_add",
        downloadUrl: "https://www.sleuthkit.org/"
    },
    {
        name: "SysInternals",
        desc: "The Sysinternals Troubleshooting Utilities have been rolled up into a single Suite of tools. This file contains the individual troubleshooting tools and help files.",
        category: "cyber",
        logo: "static/images/software/microsoft_sysinternals_logo.png",
        linkText: "Download",
        linkIcon: "download",
        downloadUrl: "https://learn.microsoft.com/en-us/sysinternals/downloads/"
    },
    {
        name: "FTKImager",
        desc: "FTK Imager is a data preview and imaging tool that lets you quickly assess electronic evidence to determine if further analysis with a forensic tool such as Forensic Toolkit (FTK) is warranted.",
        category: "cyber",
        logo: "static/images/software/exterro-logo-dark.svg",
        linkText: "Download",
        linkIcon: "download",
        downloadUrl: "https://www.exterro.com/digital-forensics-software/ftk-imager#:~:text=FTK%C2%AE%20Imager%20is%20a,(FTK%C2%AE)%20is%20warranted"
    },
    {
        name: "The Sleuth Kit",
        desc: "The Sleuth Kit is a library and collection of Unix- and Windows-based utilities for extracting data from disk drives and other storage so as to facilitate the forensic analysis of computer systems.",
        category: "cyber",
        logo: "static/images/software/hash3_v1_sm.jpg",
        linkText: "Download",
        linkIcon: "rectangle_add",
        downloadUrl: "https://www.sleuthkit.org/"
    },
    {
        name: "NMAP/<br>Zenmap",
        desc: "Nmap is a network scanner created by Gordon Lyon. Nmap is used to discover hosts and services on a computer network by sending packets and analyzing the responses. Nmap provides a number of features for probing computer networks, including host discovery and service and operating system detection.",
        category: "cyber",
        logo: "static/images/software/nmap_logo.png",
        linkText: "Visit Link",
        linkIcon: "rectangle_add",
        downloadUrl: "https://www.nmap.org"
    },
    {
        name: "Kali Linux",
        desc: "Kali Linux is an open-source, Debian-based Linux distribution geared towards various information security tasks, such as Penetration Testing, Security Research, Computer Forensics and Reverse Engineering.",
        category: "cyber",
        logo: "static/images/software/kali-logo.svg",
        linkText: "Visit Link",
        linkIcon: "rectangle_add",
        downloadUrl: "https://www.kali.org/get-kali/#kali-platforms"
    },
    {
        name: "Snort",
        desc: "Snort is an open-source, free and lightweight network intrusion detection system (NIDS) software for Linux and Windows to detect emerging threats.",
        category: "cyber",
        logo: "static/images/software/snort_txt.webp",
        linkText: "Visit Link",
        linkIcon: "rectangle_add",
        downloadUrl: "https://www.snort.org/"
    },
    {
        name: "Suricata",
        desc: "Suricata is an open-source based intrusion detection system and intrusion prevention system. It was developed by the Open Information Security Foundation. A beta version was released in December 2009, with the first standard release following in July 2010.",
        category: "cyber",
        logo: "static/images/software/Logo-Suricata-vert-whitetype-R.png",
        linkText: "Visit Link",
        linkIcon: "rectangle_add",
        downloadUrl: "https://suricata.io/"
    },
    {
        name: "Nessus",
        desc: "Nessus is a proprietary vulnerability scanner developed by Tenable, Inc.",
        category: "cyber",
        logo: "static/images/software/tenable_logo.png",
        linkText: "Visit Link",
        linkIcon: "rectangle_add",
        downloadUrl: "https://www.tenable.com/products/nessus"
    },
]

// ==================== GENERIC FILTERING SYSTEM ====================
function initPageFilters() {
    const searchInput = document.querySelector('.search-input');
    const filterBadges = document.querySelectorAll('.filter-badge');
    const softwareGrid = document.getElementById('software-grid');

    if (!searchInput || !softwareGrid) return;   // Not on a filterable page

    let currentFilter = 'all';

    function renderSoftwareCards(filteredItems) {
        softwareGrid.innerHTML = '';

        if (filteredItems.length === 0) {
            softwareGrid.innerHTML = `
                <div class="col-12 text-center py-5">
                    <p class="text-muted fs-5">No software found matching your criteria.</p>
                </div>`;
            return;
        }

        filteredItems.forEach(item => {
            const cardHTML = `
                <div class="col-lg-4 col-md-6">
                    <div class="card h-100 premium-shadow border-0 software-card">
                        <div class="card-body p-4">
                            <div class="bg-primary bg-opacity-10 rounded-3 d-flex align-items-center justify-content-center mb-4" style="width:60px;height:60px;">
                                <img src="${item.logo}" 
                         alt="${item.name} logo" 
                         class="software-logo"
                         style="max-width: 48px; max-height: 48px; object-fit: contain;">
                            </div>
                            <h3 class="font-headline fw-bold fs-4 mb-3">${item.name}</h3>
                            <p class="text-muted mb-4">${item.desc}</p>
                            <span class="badge bg-secondary-subtle text-secondary-emphasis">${item.category.toUpperCase()}</span>
                        </div>
                        <div class="card-footer bg-transparent border-0 pt-0 pb-4">
                            <a href="${item.downloadUrl}" target="_blank" class="text-primary fw-bold text-decoration-none d-flex align-items-center">
                                ${item.linkText} 
                                <span class="material-symbols-outlined ms-2">${item.linkIcon}</span>
                            </a>
                        </div>
                    </div>
                </div>`;
            softwareGrid.innerHTML += cardHTML;
        });
    }

    function filterItems() {
        const term = searchInput.value.toLowerCase().trim();

        const filtered = softwarePool.filter(item => {
            // Search term match
            const matchesSearch = !term || 
                item.name.toLowerCase().includes(term) ||
                item.desc.toLowerCase().includes(term);

            // Category match (supports multiple categories)
            let matchesFilter = true;
            
            if (currentFilter !== 'all') {
                matchesFilter = item.category.includes(currentFilter);
            }

            return matchesSearch && matchesFilter;
    });

    renderSoftwareCards(filtered);
}

    // Event Listeners
    searchInput.addEventListener('input', filterItems);

    filterBadges.forEach(badge => {
        badge.addEventListener('click', () => {
            filterBadges.forEach(b => b.classList.remove('active'));
            badge.classList.add('active');
            currentFilter = badge.getAttribute('data-filter') || 'all';
            filterItems();
        });
    });

    // ←←← THIS IS THE FIX: Render cards immediately on page load
    filterItems();
}

// Initialize everything
document.addEventListener('DOMContentLoaded', () => {
    initPageFilters();
    
    // Your existing code (next meeting date, spotlight, etc.)
    const nextMeetingElement = document.getElementById('nextMeetingDate');
    if (nextMeetingElement) {
        nextMeetingElement.textContent = getNextMeetingDate();
    }
});