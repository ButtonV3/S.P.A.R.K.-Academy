// Импортируем Appwrite SDK
const { Client, Account } = require('appwrite');

// Настраиваем клиент
const client = new Client();
client
  .setEndpoint('https://fra.cloud.appwrite.io/v1') // твой endpoint
  .setProject('6919bd9c00395c67f284');             // твой Project ID

// Объект для работы с аккаунтами
const account = new Account(client);

// --------------------
// Функция регистрации
// --------------------
async function registerUser(userId, email, password, name) {
  try {
    const response = await account.create(userId, email, password, name);
    console.log('Регистрация успешна:', response);
  } catch (error) {
    console.error('Ошибка при регистрации:', error.message);
  }
}

// --------------------
// Функция входа
// --------------------
async function loginUser(email, password) {
  try {
    const session = await account.createSession(email, password);
    console.log('Вход успешен! Сессия:', session);

    // Получаем данные пользователя (личный кабинет)
    const user = await account.get();
    console.log('Личный кабинет:', user);
  } catch (error) {
    console.error('Ошибка при входе:', error.message);
  }
}

// --------------------
// Примеры использования
// --------------------

// Зарегистрировать нового пользователя (uncomment, если нужно создать)
// registerUser('user1', 'user@example.com', 'password123', 'Gleb');

// Войти пользователю
loginUser('user@example.com', 'password123');
