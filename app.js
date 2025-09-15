document.addEventListener('DOMContentLoaded', function() {
    // --- CACHE DOM ELEMENTS ---
    const pages = document.querySelectorAll('.page');
    const navLinks = document.querySelectorAll('.nav-link');
    const navButtons = document.querySelectorAll('.nav-button');
    const mainNav = document.getElementById('main-nav');
    const hamburger = document.getElementById('hamburger-menu');
    const analyzeVideoBtn = document.getElementById('analyze-video-btn');
    const analyzeAnotherBtn = document.getElementById('analyze-another-btn');
    const coachDashboardBtn = document.getElementById('coach-dashboard-btn');
    const govtDashboardBtn = document.getElementById('govt-dashboard-btn');

    // --- TRANSLATIONS OBJECT ---
    const translations = {
        en: {
            "dashboard": "Dashboard",
            "ai-analysis": "AI Analysis",
            "training-hub": "Training Hub",
            "sports-hub": "Sports Hub",
            "event-dashboard": "Events",
            "my-profile": "My Profile",
            "settings": "Settings",
            "welcome": "Welcome to ChampionBharat",
            "ready-to-train": "Ready to Train?",
            "start-analysis": "Start AI Analysis",
            // Add more translations as needed
        },
        hi: {
            "dashboard": "डैशबोर्ड",
            "ai-analysis": "एआई विश्लेषण",
            "training-hub": "प्रशिक्षण केंद्र",
            "sports-hub": "खेल केंद्र",
            "event-dashboard": "आयोजन",
            "my-profile": "मेरी प्रोफाइल",
            "settings": "सेटिंग्स",
            "welcome": "चैंपियनभारत में आपका स्वागत है",
            "ready-to-train": "प्रशिक्षण के लिए तैयार?",
            "start-analysis": "एआई विश्लेषण शुरू करें",
            // Add more translations as needed
        },
        bn: {
            "dashboard": "ড্যাশবোর্ড",
            "ai-analysis": "এআই বিশ্লেষণ",
            "training-hub": "প্রশিক্ষণ হাব",
            "sports-hub": "ক্রীড়া হাব",
            "event-dashboard": "ইভেন্ট",
            "my-profile": "আমার প্রোফাইল",
            "settings": "সেটিংস",
            // Add more translations as needed
        },
        ta: {
            "dashboard": "டாஷ்போர்டு",
            "ai-analysis": "AI பகுப்பாய்வு",
            "training-hub": "பயிற்சி மையம்",
            "sports-hub": "விளையாட்டு மையம்",
            "event-dashboard": "நிகழ்வுகள்",
            "my-profile": "எனது சுயவிவரம்",
            "settings": "அமைப்புகள்",
            // Add more translations as needed
        },
        te: {
            "dashboard": "డాష్బోర్డ్",
            "ai-analysis": "AI విశ్లేషణ",
            "training-hub": "శిక్షణ సెంటర్",
            "sports-hub": "స్పోర్ట్స్ సెంటర్",
            "event-dashboard": "ఈవెంట్లు",
            "my-profile": "నా ప్రొఫైల్",
            "settings": "సెట్టింగ్లు",
            // Add more translations as needed
        }
    };

    // --- FUNCTIONS ---
    function showPage(pageId) {
        pages.forEach(page => page.classList.remove('active'));
        document.getElementById(pageId)?.classList.add('active');

        navLinks.forEach(link => link.classList.toggle('active', link.dataset.target === pageId));

        mainNav.classList.remove('active');
        window.scrollTo(0, 0);
    }

    function handleAnalysis() {
        if (!document.getElementById('video-upload').files.length) {
            alert('Please upload a video file first!');
            return;
        }
        document.getElementById('upload-view').style.display = 'none';
        document.getElementById('loading-view').style.display = 'block';
        document.getElementById('results-view').style.display = 'none';

        setTimeout(() => {
            document.getElementById('loading-view').style.display = 'none';
            document.getElementById('results-view').style.display = 'block';
        }, 3000);
    }

    function resetAnalysis() {
        document.getElementById('upload-view').style.display = 'block';
        document.getElementById('loading-view').style.display = 'none';
        document.getElementById('results-view').style.display = 'none';
        document.getElementById('video-upload').value = '';
    }

    // --- THEME SWITCHER LOGIC ---
    const themeToggle = document.getElementById('theme-toggle');
    
    // Function to apply the theme
    const applyTheme = (theme) => {
        document.body.setAttribute('data-theme', theme);
        themeToggle.checked = theme === 'dark';
    };

    // Check for saved theme in localStorage
    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);

    themeToggle.addEventListener('change', () => {
        const newTheme = themeToggle.checked ? 'dark' : 'light';
        localStorage.setItem('theme', newTheme);
        applyTheme(newTheme);
    });

    // --- SIMULATED AI TRANSLATION API ---
    const languageSwitcher = document.getElementById('language-switcher');
    
    async function fetchTranslationsFromAPI(lang) {
        console.log(`Fetching translations for ${lang}... (Simulated API call)`);
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(translations[lang] || translations['en']);
            }, 500); // Simulate 500ms network delay
        });
    }

    async function changeLanguage(lang) {
        const langData = await fetchTranslationsFromAPI(lang);
        document.querySelectorAll('[data-lang-key]').forEach(el => {
            const key = el.dataset.langKey;
            if (langData[key]) {
                el.innerText = langData[key];
            }
        });
    }
    languageSwitcher.addEventListener('change', (e) => changeLanguage(e.target.value));

    // --- COMPREHENSIVE SPORTS HUB LOGIC ---
    const mockSportsData = {
        athletics: { 
            name: 'Athletics', 
            rules: 'Athletics is a collection of sporting events that involve competitive running, jumping, throwing, and walking.', 
            videos: [
                {title: 'Sprinting Technique', url: '#'},
                {title: 'Long Jump Basics', url: '#'}
            ] 
        },
        kabaddi: { 
            name: 'Kabaddi', 
            rules: 'Kabaddi is a contact team sport played between two teams of seven players. The objective is for a single player to raid the opposing team\'s court and tag as many defenders as possible.', 
            videos: [
                {title: 'Raiding Skills', url: '#'},
                {title: 'Defensive Strategies', url: '#'}
            ] 
        },
        hockey: {
            name: 'Hockey',
            rules: 'Hockey is a sport in which two teams play against each other by trying to maneuver a ball or a puck into the opponent\'s goal using a hockey stick.',
            videos: [
                {title: 'Dribbling Techniques', url: '#'},
                {title: 'Penalty Corner Strategies', url: '#'}
            ]
        }
    };
    
    function loadSportsHub() {
        const sportsGrid = document.getElementById('sports-grid');
        sportsGrid.innerHTML = '';
        
        for (const [key, sport] of Object.entries(mockSportsData)) {
            const sportCard = document.createElement('div');
            sportCard.className = 'card';
            sportCard.innerHTML = `
                <h3>${sport.name}</h3>
                <p>Click to learn more about ${sport.name}</p>
                <button class="small-btn view-sport-btn" data-sport="${key}">View Details</button>
            `;
            sportsGrid.appendChild(sportCard);
        }
        
        // Add event listeners to the view buttons
        document.querySelectorAll('.view-sport-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                showSportDetails(btn.dataset.sport);
            });
        });
    }
    
    function showSportDetails(sportKey) {
        const sport = mockSportsData[sportKey];
        const detailsView = document.getElementById('sport-details-view');
        const sportsGrid = document.getElementById('sports-grid');
        
        detailsView.innerHTML = `
            <button class="small-btn back-to-sports">← Back to Sports</button>
            <h3>${sport.name}</h3>
            <h4>Rules</h4>
            <p>${sport.rules}</p>
            <h4>Training Videos</h4>
            <ul>
                ${sport.videos.map(video => `<li><a href="${video.url}">${video.title}</a></li>`).join('')}
            </ul>
        `;
        
        sportsGrid.style.display = 'none';
        detailsView.style.display = 'block';
        
        // Add event listener to the back button
        detailsView.querySelector('.back-to-sports').addEventListener('click', () => {
            detailsView.style.display = 'none';
            sportsGrid.style.display = 'grid';
        });
    }

    // --- EVENT LISTENERS ---
    navLinks.forEach(link => link.addEventListener('click', (e) => {
        e.preventDefault();
        showPage(e.currentTarget.dataset.target);
        
        // Special handling for sports hub
        if (e.currentTarget.dataset.target === 'sports-hub') {
            loadSportsHub();
        }
    }));
    
    navButtons.forEach(button => button.addEventListener('click', (e) => {
        showPage(e.currentTarget.dataset.target);
    }));
    
    hamburger.addEventListener('click', () => mainNav.classList.toggle('active'));
    analyzeVideoBtn.addEventListener('click', handleAnalysis);
    analyzeAnotherBtn.addEventListener('click', resetAnalysis);
    
    // Dashboard buttons
    if (coachDashboardBtn) {
        coachDashboardBtn.addEventListener('click', () => {
            window.location.href = 'coach.html';
        });
    }
    
    if (govtDashboardBtn) {
        govtDashboardBtn.addEventListener('click', () => {
            window.location.href = 'gov.html';
        });
    }

    // Placeholder alerts for other buttons
    document.addEventListener('click', function(e){
        if(e.target.tagName === 'BUTTON' && e.target.innerText.includes('Shop Now')){
            alert('Opening Merchandise Store...');
        }
        if(e.target.tagName === 'BUTTON' && e.target.innerText.includes('Start AR Session')){
            alert('Starting AR Training Session...');
        }
        if(e.target.tagName === 'BUTTON' && e.target.innerText.includes('Book a Session')){
            alert('Showing available coaches for 1-to-1 sessions...');
        }
        if(e.target.tagName === 'BUTTON' && e.target.innerText.includes('Watch Now')){
            alert('Opening Live Stream...');
        }
        if(e.target.tagName === 'BUTTON' && e.target.innerText.includes('Book Tickets')){
            alert('Redirecting to ticket booking...');
        }
        if(e.target.tagName === 'BUTTON' && e.target.innerText.includes('Visit Store')){
            alert('Opening Rewards Store...');
        }
    });

    // --- INITIALIZE APP ---
    showPage('dashboard');
});