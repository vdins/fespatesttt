// ========================================
// FESPA 11th - JavaScript Interactions
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ========================================
    // CONTINUOUS BACKGROUND MUSIC SYSTEM
    // ========================================
    
    // Create or get audio element
    let bgMusic = document.getElementById('backgroundMusic');
    
    if (!bgMusic) {
        bgMusic = document.createElement('audio');
        bgMusic.id = 'backgroundMusic';
        bgMusic.loop = false; // Play once only, no loop
        bgMusic.innerHTML = '<source src="Welcome FESPA.mp3" type="audio/mpeg">';
        document.body.appendChild(bgMusic);
    }
    
    // Set volume
    bgMusic.volume = 0.4;
    
    // Function to save audio state
    function saveAudioState() {
        if (bgMusic && !bgMusic.paused) {
            sessionStorage.setItem('audioTime', bgMusic.currentTime);
            sessionStorage.setItem('audioPlaying', 'true');
        }
    }
    
    // Function to load audio state
    function loadAudioState() {
        const savedTime = sessionStorage.getItem('audioTime');
        const wasPlaying = sessionStorage.getItem('audioPlaying');
        
        if (savedTime && wasPlaying === 'true') {
            bgMusic.currentTime = parseFloat(savedTime);
            bgMusic.play()
                .then(() => {
                    console.log('🎵 Audio resumed from', savedTime + 's');
                })
                .catch(error => {
                    console.log('Audio resume failed:', error);
                });
        }
    }
    
    // Start audio if coming from splash or if already playing
    if (sessionStorage.getItem('playWelcomeAudio') === 'true' || sessionStorage.getItem('audioPlaying') === 'true') {
        // First time from splash
        if (sessionStorage.getItem('playWelcomeAudio') === 'true') {
            sessionStorage.setItem('playWelcomeAudio', 'false');
            sessionStorage.setItem('audioPlaying', 'true');
            bgMusic.currentTime = 0;
        }
        
        // Load saved position and play
        loadAudioState();
        
        // If autoplay blocked, try on user interaction
        bgMusic.play().catch(() => {
            const playOnInteraction = () => {
                loadAudioState();
                document.removeEventListener('click', playOnInteraction);
                document.removeEventListener('keydown', playOnInteraction);
            };
            document.addEventListener('click', playOnInteraction, { once: true });
            document.addEventListener('keydown', playOnInteraction, { once: true });
        });
    }
    
    // Save audio state before page unload
    window.addEventListener('beforeunload', saveAudioState);
    
    // Update audio time periodically
    setInterval(saveAudioState, 1000);
    
    // Create music toggle button
    const musicToggle = document.createElement('button');
    musicToggle.id = 'musicToggle';
    musicToggle.className = 'music-toggle-btn';
    musicToggle.innerHTML = '<i class="fas fa-volume-up"></i>';
    musicToggle.setAttribute('aria-label', 'Toggle music');
    document.body.appendChild(musicToggle);
    
    // Toggle music on/off
    musicToggle.addEventListener('click', function() {
        if (bgMusic.paused) {
            loadAudioState();
            sessionStorage.setItem('audioPlaying', 'true');
            this.innerHTML = '<i class="fas fa-volume-up"></i>';
            this.classList.remove('muted');
        } else {
            bgMusic.pause();
            sessionStorage.setItem('audioPlaying', 'false');
            this.innerHTML = '<i class="fas fa-volume-mute"></i>';
            this.classList.add('muted');
        }
    });
    
    // Update button state
    if (bgMusic.paused && sessionStorage.getItem('audioPlaying') !== 'true') {
        musicToggle.innerHTML = '<i class="fas fa-volume-mute"></i>';
        musicToggle.classList.add('muted');
    }
    
    // ========================================
    // MOBILE NAVIGATION
    // ========================================
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
        
        // Close menu when clicking on nav links
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
    }
    
    // ========================================
    // NAVBAR SCROLL EFFECT
    // ========================================
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            navbar.style.background = 'rgba(10, 14, 39, 0.98)';
            navbar.style.boxShadow = '0 4px 16px rgba(0, 212, 255, 0.15)';
        } else {
            navbar.style.background = 'rgba(10, 14, 39, 0.95)';
            navbar.style.boxShadow = 'none';
        }
        
        lastScroll = currentScroll;
    });
    
    // ========================================
    // ANIMATED COUNTER FOR STATS
    // ========================================
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const animateCounter = (element) => {
        const target = parseInt(element.getAttribute('data-target'));
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60fps
        let current = 0;
        
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                element.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target + '+';
            }
        };
        
        updateCounter();
    };
    
    // Intersection Observer for counter animation
    const observerOptions = {
        threshold: 0.5
    };
    
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                statsObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    statNumbers.forEach(stat => {
        statsObserver.observe(stat);
    });
    
    // ========================================
    // FILTER COMPETITIONS
    // ========================================
    const filterButtons = document.querySelectorAll('.filter-btn');
    const competitionCards = document.querySelectorAll('.competition-card');
    const competitionCategories = document.querySelectorAll('.competition-category');
    
    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                const filter = this.getAttribute('data-filter');
                
                // Update active button
                filterButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                
                // Filter cards
                if (filter === 'all') {
                    competitionCategories.forEach(category => {
                        category.style.display = 'block';
                    });
                    competitionCards.forEach(card => {
                        card.style.display = 'block';
                        card.style.animation = 'fadeIn 0.5s ease forwards';
                    });
                } else {
                    // Hide all categories first
                    competitionCategories.forEach(category => {
                        category.style.display = 'none';
                    });
                    
                    // Show only selected category
                    competitionCards.forEach(card => {
                        const cardCategory = card.getAttribute('data-category');
                        if (cardCategory === filter) {
                            card.closest('.competition-category').style.display = 'block';
                            card.style.display = 'block';
                            card.style.animation = 'fadeIn 0.5s ease forwards';
                        }
                    });
                }
            });
        });
    }
    
    // ========================================
    // COMPETITION CARD CLICK TO DETAIL & AUTO-INIT
    // ========================================
    competitionCards.forEach(card => {
        // Auto-generate lomba-id if not exists
        if (!card.getAttribute('data-lomba-id')) {
            const title = card.querySelector('h3')?.textContent;
            const category = card.getAttribute('data-category');
            
            // Generate ID from title
            if (title && category) {
                let lombaId = '';
                
                // Mapping untuk auto-generate ID
                const titleMap = {
                    // SD
                    'Olimpiade IPA': 'sd-ipa',
                    'Olimpiade IPS': 'sd-ips',
                    'Olimpiade Matematika': category + '-matematika',
                    'Olimpiade PAI': category + '-pai',
                    'Olimpiade Tahfidz/Sederajat': 'sd-tahfidz',
                    // SMP
                    'Lomba Baca Puisi': category + '-puisi',
                    'Story Telling': category + '-storytelling',
                    'Musabaqah Hifdzil Qur\'an (MHQ)': 'smp-mhq',
                    // SMA
                    'Olimpiade Fisika': 'sma-fisika',
                    'Olimpiade Kimia': 'sma-kimia',
                    'Olimpiade Biologi': 'sma-biologi',
                    'Olimpiade Ekonomi': 'sma-ekonomi',
                    'Olimpiade Astronomi': 'sma-astronomi',
                    'Olimpiade Geografi': 'sma-geografi',
                    'Olimpiade Kebumian': 'sma-kebumian',
                    'Olimpiade Komputer': 'sma-komputer',
                    'Akustik': 'sma-akustik',
                    'Pidato Bahasa Inggris (Speech)': 'sma-speech',
                    'Tournament Volly (Siswa Putra SMA)': 'sma-volly',
                    'Smantripa CUP (Siswa SMA)': 'sma-smantripa'
                };
                
                if (titleMap[title]) {
                    lombaId = titleMap[title];
                } else if (title.includes('Matematika')) {
                    lombaId = category + '-matematika';
                } else if (title.includes('IPA')) {
                    lombaId = category + '-ipa';
                } else if (title.includes('IPS')) {
                    lombaId = category + '-ips';
                } else if (title.includes('PAI')) {
                    lombaId = category + '-pai';
                }
                
                if (lombaId) {
                    card.setAttribute('data-lomba-id', lombaId);
                    
                    // Update daftar button link
                    const daftarBtn = card.querySelector('.btn');
                    if (daftarBtn) {
                        daftarBtn.href = `pendaftaran.html?lomba=${lombaId}`;
                    }
                }
            }
        }
        
        // Make card clickable (redirect to detail page)
        card.style.cursor = 'pointer';
        card.addEventListener('click', function(e) {
            // Don't redirect if clicking on the "Daftar" button
            if (e.target.closest('.btn')) {
                return;
            }
            
            // Get lomba ID from card data attribute
            const lombaId = this.getAttribute('data-lomba-id');
            if (lombaId) {
                window.location.href = `detail-lomba.html?id=${lombaId}`;
            }
        });
    });
    
    // ========================================
    // AUTO-FILL LOMBA FROM URL PARAMETER
    // ========================================
    const lombaSelect = document.getElementById('lomba');
    if (lombaSelect) {
        const urlParams = new URLSearchParams(window.location.search);
        const lombaParam = urlParams.get('lomba');
        
        if (lombaParam) {
            // Try to select the lomba
            const option = lombaSelect.querySelector(`option[value="${lombaParam}"]`);
            if (option) {
                lombaSelect.value = lombaParam;
                
                // Highlight the select with animation
                lombaSelect.style.border = '2px solid var(--primary-color)';
                lombaSelect.style.boxShadow = '0 0 10px rgba(0, 212, 255, 0.5)';
                
                setTimeout(() => {
                    lombaSelect.style.border = '';
                    lombaSelect.style.boxShadow = '';
                }, 2000);
                
                // Scroll to form
                lombaSelect.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }
    }
    
    // ========================================
    // REGISTRATION FORM - TEAM SECTION TOGGLE
    // ========================================
    const tipeSelect = document.getElementById('tipe');
    const teamSection = document.getElementById('teamSection');
    
    if (tipeSelect && teamSection) {
        tipeSelect.addEventListener('change', function() {
            if (this.value === 'tim') {
                teamSection.style.display = 'block';
                // Make team fields required
                document.getElementById('namaTeam').required = true;
                document.getElementById('jumlahAnggota').required = true;
            } else {
                teamSection.style.display = 'none';
                // Make team fields optional
                document.getElementById('namaTeam').required = false;
                document.getElementById('jumlahAnggota').required = false;
            }
        });
    }
    
    // ========================================
    // FILE UPLOAD PREVIEW
    // ========================================
    const fileInput = document.getElementById('buktiPembayaran');
    const fileLabel = document.querySelector('.file-upload-label');
    
    if (fileInput && fileLabel) {
        fileInput.addEventListener('change', function() {
            const fileName = this.files[0]?.name;
            if (fileName) {
                const fileSize = (this.files[0].size / 1024 / 1024).toFixed(2); // Convert to MB
                
                if (fileSize > 5) {
                    alert('Ukuran file terlalu besar! Maksimal 5MB');
                    this.value = '';
                    return;
                }
                
                fileLabel.querySelector('span').textContent = fileName;
                fileLabel.style.borderColor = 'var(--success-color)';
                fileLabel.style.background = 'rgba(0, 245, 212, 0.1)';
            }
        });
    }
    
    // ========================================
    // REGISTRATION FORM VALIDATION & SUBMISSION
    // ========================================
    const registrationForm = document.getElementById('registrationForm');
    
    if (registrationForm) {
        registrationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic validation
            const nama = document.getElementById('nama').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const jenjang = document.getElementById('jenjang').value;
            const lomba = document.getElementById('lomba').value;
            const tipe = document.getElementById('tipe').value;
            const agreement = document.getElementById('agreement').checked;
            
            if (!nama || !email || !phone || !jenjang || !lomba || !tipe) {
                showNotification('Mohon lengkapi semua field yang wajib diisi!', 'error');
                return;
            }
            
            if (!agreement) {
                showNotification('Anda harus menyetujui peraturan untuk melanjutkan!', 'error');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showNotification('Format email tidak valid!', 'error');
                return;
            }
            
            // Phone validation (Indonesian format)
            const phoneRegex = /^(\+62|62|0)[0-9]{9,12}$/;
            if (!phoneRegex.test(phone.replace(/[\s-]/g, ''))) {
                showNotification('Format nomor telepon tidak valid!', 'error');
                return;
            }
            
            // If team, validate team fields
            if (tipe === 'tim') {
                const namaTeam = document.getElementById('namaTeam').value.trim();
                const jumlahAnggota = document.getElementById('jumlahAnggota').value;
                
                if (!namaTeam || !jumlahAnggota) {
                    showNotification('Mohon lengkapi data tim!', 'error');
                    return;
                }
            }
            
            // Show loading
            const submitButton = this.querySelector('button[type="submit"]');
            const originalText = submitButton.innerHTML;
            submitButton.innerHTML = '<i class="fas fa-spinner loading"></i> Mengirim...';
            submitButton.disabled = true;
            
            // Simulate form submission (replace with actual API call)
            setTimeout(() => {
                showNotification('Pendaftaran berhasil! Kami akan mengirimkan konfirmasi via email.', 'success');
                registrationForm.reset();
                submitButton.innerHTML = originalText;
                submitButton.disabled = false;
                
                // Scroll to top
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }, 2000);
        });
    }
    
    // ========================================
    // CONTACT FORM SUBMISSION
    // ========================================
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nama = document.getElementById('nama').value.trim();
            const email = document.getElementById('email').value.trim();
            const subjek = document.getElementById('subjek').value;
            const pesan = document.getElementById('pesan').value.trim();
            
            if (!nama || !email || !subjek || !pesan) {
                showNotification('Mohon lengkapi semua field!', 'error');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showNotification('Format email tidak valid!', 'error');
                return;
            }
            
            // Show loading
            const submitButton = this.querySelector('button[type="submit"]');
            const originalText = submitButton.innerHTML;
            submitButton.innerHTML = '<i class="fas fa-spinner loading"></i> Mengirim...';
            submitButton.disabled = true;
            
            // Simulate form submission
            setTimeout(() => {
                showNotification('Pesan berhasil dikirim! Kami akan menghubungi Anda segera.', 'success');
                contactForm.reset();
                submitButton.innerHTML = originalText;
                submitButton.disabled = false;
            }, 2000);
        });
    }
    
    // ========================================
    // FAQ ACCORDION
    // ========================================
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', function() {
            // Close other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
        });
    });
    
    // ========================================
    // SMOOTH SCROLL FOR ANCHOR LINKS
    // ========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Only prevent default for internal anchors
            if (href !== '#' && href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);
                
                if (target) {
                    const offsetTop = target.offsetTop - 80; // Account for fixed navbar
                    
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // ========================================
    // FADE IN ANIMATION ON SCROLL
    // ========================================
    const fadeElements = document.querySelectorAll('.about-card, .competition-card, .timeline-item, .team-card');
    
    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                fadeObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    fadeElements.forEach(element => {
        fadeObserver.observe(element);
    });
    
    // ========================================
    // NOTIFICATION SYSTEM
    // ========================================
    function showNotification(message, type = 'info') {
        // Remove existing notifications
        const existingNotif = document.querySelector('.notification');
        if (existingNotif) {
            existingNotif.remove();
        }
        
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        
        // Icon based on type
        let icon = 'fa-info-circle';
        if (type === 'success') icon = 'fa-check-circle';
        if (type === 'error') icon = 'fa-exclamation-circle';
        if (type === 'warning') icon = 'fa-exclamation-triangle';
        
        notification.innerHTML = `
            <i class="fas ${icon}"></i>
            <span>${message}</span>
            <button class="notification-close"><i class="fas fa-times"></i></button>
        `;
        
        // Add styles
        Object.assign(notification.style, {
            position: 'fixed',
            top: '100px',
            right: '20px',
            padding: '1rem 1.5rem',
            background: type === 'success' ? 'var(--success-color)' : 
                       type === 'error' ? 'var(--accent-color)' : 
                       type === 'warning' ? 'var(--warning-color)' : 
                       'var(--primary-color)',
            color: 'var(--bg-primary)',
            borderRadius: '8px',
            boxShadow: 'var(--shadow-lg)',
            zIndex: '9999',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            fontWeight: '600',
            animation: 'slideInRight 0.3s ease',
            maxWidth: '400px'
        });
        
        // Add animation keyframes
        if (!document.querySelector('#notificationStyles')) {
            const style = document.createElement('style');
            style.id = 'notificationStyles';
            style.textContent = `
                @keyframes slideInRight {
                    from {
                        transform: translateX(400px);
                        opacity: 0;
                    }
                    to {
                        transform: translateX(0);
                        opacity: 1;
                    }
                }
                @keyframes slideOutRight {
                    from {
                        transform: translateX(0);
                        opacity: 1;
                    }
                    to {
                        transform: translateX(400px);
                        opacity: 0;
                    }
                }
                .notification-close {
                    background: none;
                    border: none;
                    color: inherit;
                    cursor: pointer;
                    padding: 0.25rem;
                    font-size: 1.2rem;
                    opacity: 0.8;
                    transition: opacity 0.2s;
                }
                .notification-close:hover {
                    opacity: 1;
                }
            `;
            document.head.appendChild(style);
        }
        
        // Add to body
        document.body.appendChild(notification);
        
        // Close button functionality
        const closeBtn = notification.querySelector('.notification-close');
        closeBtn.addEventListener('click', () => {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        });
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            if (notification.parentElement) {
                notification.style.animation = 'slideOutRight 0.3s ease';
                setTimeout(() => notification.remove(), 300);
            }
        }, 5000);
    }
    
    // ========================================
    // FORM RESET CONFIRMATION
    // ========================================
    document.querySelectorAll('button[type="reset"]').forEach(button => {
        button.addEventListener('click', function(e) {
            if (!confirm('Apakah Anda yakin ingin mereset form ini?')) {
                e.preventDefault();
            }
        });
    });
    
    // ========================================
    // COMPETITION CATEGORY FILTER PERSISTENCE
    // ========================================
    // Check if there's a stored filter preference
    const storedFilter = localStorage.getItem('competitionFilter');
    if (storedFilter && filterButtons.length > 0) {
        const filterButton = document.querySelector(`[data-filter="${storedFilter}"]`);
        if (filterButton) {
            filterButton.click();
        }
    }
    
    // Save filter preference when changed
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            localStorage.setItem('competitionFilter', this.getAttribute('data-filter'));
        });
    });
    
    // ========================================
    // BACK TO TOP BUTTON
    // ========================================
    const backToTop = document.createElement('button');
    backToTop.className = 'back-to-top';
    backToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTop.setAttribute('aria-label', 'Back to top');
    
    Object.assign(backToTop.style, {
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        width: '50px',
        height: '50px',
        background: 'var(--primary-color)',
        color: 'var(--bg-primary)',
        border: 'none',
        borderRadius: '50%',
        cursor: 'pointer',
        fontSize: '1.2rem',
        display: 'none',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: '999',
        transition: 'all 0.3s ease',
        boxShadow: 'var(--shadow-lg)'
    });
    
    document.body.appendChild(backToTop);
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTop.style.display = 'flex';
        } else {
            backToTop.style.display = 'none';
        }
    });
    
    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    backToTop.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
        this.style.boxShadow = 'var(--glow)';
    });
    
    backToTop.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
        this.style.boxShadow = 'var(--shadow-lg)';
    });
    
    // ========================================
    // CONSOLE EASTER EGG
    // ========================================
    console.log('%cFESPA 11th', 'font-size: 3rem; font-weight: bold; color: #00d4ff; text-shadow: 0 0 10px #00d4ff;');
    console.log('%cInovasi Digital, Prestasi Optimal', 'font-size: 1.2rem; color: #b8c1ec;');
    console.log('%c🚀 Website dibuat dengan ❤️ untuk FESPA 11th', 'font-size: 1rem; color: #7c8db5;');
    
});

// ========================================
// PREVENT FORM RESUBMISSION ON REFRESH
// ========================================
if (window.history.replaceState) {
    window.history.replaceState(null, null, window.location.href);
}

