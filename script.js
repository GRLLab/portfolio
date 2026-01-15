        const themeSwitcher = document.getElementById('theme-switcher');
        const icon = themeSwitcher.querySelector('i');
        const currentTheme = localStorage.getItem('theme');
        if (currentTheme) { document.documentElement.setAttribute('data-theme', currentTheme); updateIcon(currentTheme); }

        themeSwitcher.addEventListener('click', () => {
            let theme = document.documentElement.getAttribute('data-theme');
            let newTheme = theme === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateIcon(newTheme);
        });

        function updateIcon(theme) {
            if(theme === 'dark') { icon.classList.remove('ph-sun'); icon.classList.add('ph-moon'); } 
            else { icon.classList.remove('ph-moon'); icon.classList.add('ph-sun'); }
        }

        function copyToClipboard(text, successMessage) {
            navigator.clipboard.writeText(text).then(() => { showNotification(successMessage); });
        }
        function showNotification(message) {
            const notif = document.getElementById('notification');
            notif.textContent = message; notif.classList.add('show');
            setTimeout(() => { notif.classList.remove('show'); }, 2000);
        }
        