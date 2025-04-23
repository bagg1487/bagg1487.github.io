document.addEventListener('DOMContentLoaded', function() {
    // Добавляем анимацию клика для редактируемых элементов
    const editableElements = document.querySelectorAll('[contenteditable="true"]');
    
    editableElements.forEach(element => {
        element.addEventListener('click', function(e) {
            this.classList.add('click-animate');
            setTimeout(() => {
                this.classList.remove('click-animate');
            }, 300);
        });
    });
    
    // Обработка кнопки скачивания
    const downloadBtn = document.getElementById('downloadBtn');
    
    // Добавьте эту библиотеку в head
// <script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"></script>

downloadBtn.addEventListener('click', function() {
    const element = document.querySelector('.resume-container');
    const opt = {
        margin: 10,
        filename: 'Мое_резюме.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };
    
    // Генерация PDF
    html2pdf().from(element).set(opt).save();
});
        
        // Имитация задержки генерации PDF
        setTimeout(() => {
            this.classList.remove('wave-effect');
        }, 1000);
    });
});
