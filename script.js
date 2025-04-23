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
    
    downloadBtn.addEventListener('click', function() {
        // Добавляем wave эффект
        this.classList.add('wave-effect');
        
        // В реальном проекте здесь будет код для генерации PDF
        // Для примера просто создаем ссылку на несуществующий PDF
        const link = document.createElement('a');
        link.href = 'resume.pdf';
        link.download = 'Мое_резюме.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // Имитация задержки генерации PDF
        setTimeout(() => {
            this.classList.remove('wave-effect');
        }, 1000);
    });
});