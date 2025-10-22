document.addEventListener('DOMContentLoaded', function() {
    // Add interactive features to the table
    const tableRows = document.querySelectorAll('.longevity-table tbody tr');
    const researchNotes = document.querySelector('.research-notes');
    
    // Add click functionality to table rows for mobile
    tableRows.forEach(row => {
        row.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                this.classList.toggle('active');
            }
        });
    });
    
    // Add animation to table rows on load
    function animateTableRows() {
        tableRows.forEach((row, index) => {
            row.style.opacity = '0';
            row.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                row.style.transition = 'all 0.5s ease';
                row.style.opacity = '1';
                row.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }
    
    // Initialize animations
    animateTableRows();
    
    // Add scroll animation for research notes
    function animateOnScroll() {
        const elements = document.querySelectorAll('.research-notes, .table-wrapper');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });
        
        elements.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = 'all 0.6s ease';
            observer.observe(element);
        });
    }
    
    // Initialize scroll animations
    animateOnScroll();
    
    // Add print functionality
    function addPrintButton() {
        const printBtn = document.createElement('button');
        printBtn.textContent = 'Print Table';
        printBtn.className = 'print-btn';
        printBtn.style.cssText = `
            display: block;
            margin: 20px auto;
            padding: 10px 20px;
            background: #1a2a6c;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 1rem;
        `;
        
        printBtn.addEventListener('click', function() {
            window.print();
        });
        
        document.querySelector('.table-wrapper').parentNode.insertBefore(printBtn, document.querySelector('.research-notes'));
    }
    
    // Initialize print button
    addPrintButton();
    
    // Add responsive table enhancements
    function enhanceTableResponsiveness() {
        const table = document.querySelector('.longevity-table');
        
        function adjustTableLayout() {
            if (window.innerWidth <= 768) {
                table.classList.add('mobile-view');
            } else {
                table.classList.remove('mobile-view');
            }
        }
        
        // Initial adjustment
        adjustTableLayout();
        
        // Adjust on resize
        window.addEventListener('resize', adjustTableLayout);
    }
    
    // Initialize responsive enhancements
    enhanceTableResponsiveness();
    
    console.log('Walking Longevity Table loaded successfully!');
});
