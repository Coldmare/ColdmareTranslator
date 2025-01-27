// Замените 'YOUR_API_KEY' на ваш реальный API-ключ Yandex Translate
const API_KEY = 'ajeqq4be2afc9d06j1pt';
const API_URL = 'https://translate.yandex.net/api/v1.5/tr.json/translate';

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем стандартное поведение формы

    const text = document.getElementById('InputText').value;
    const targetLanguage = document.getElementById('language').value;

    // Формируем URL для запроса
    const url = `${API_URL}?key=${API_KEY}&text=${encodeURIComponent(text)}&lang=${targetLanguage}`;

    // Отправляем запрос к Yandex Translate API
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Ошибка сети');
            }
            return response.json();
        })
        .then(data => {
            if (data.code === 200) {
                // Отображаем переведенный текст
                const translatedText = data.text[0];
                alert('Перевод: ' + translatedText);
            } else {
                alert('Ошибка: ' + data.message);
            }
        })
        .catch(error => {
            console.error('Ошибка:', error);
            alert('Произошла ошибка при переводе.');
        });
});