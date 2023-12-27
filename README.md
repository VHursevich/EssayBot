# Как запускать!
Запуск BD "yarn dev" для быстрого исправления(автоматически запускается при обновлении)
Запуск Client "npm start"

# Команды git
  # Создание commit 
    1)git add . -добавляет все файлы, которые были изменены
    2)git commit -m "Здесь сообщение о том, что было добавлено(изменено)"
    3)git push (Запушить в репозиторий )
  
  # Работа с commit-ами
    1)git log - список коммитов, которые были раньше
    2)git status - статус файлов для коммита
    3)git branch - список веток
    4)git checkout <hash коммита> - переключение между коммитами 

  # Принятие изменений из удалённого репа
    1)git pull
    
  # Создание ветки
    1.2)git checkout -b <название ветки> - 1 и 2 пункт
  
    1)git branch <название ветки> - создание ветки
    2)git checkout <название ветки> - переключение на ветку
    3)git push origin <название ветки> - выгрузка ветки на гит(1 раз, потом можно использовать push)
  
  # Работа с ветками
    !!!!!!!!!! 1)git branch -d <название ветки> - удалить ветку !!!!!!!!!!!!!!!
    2)git branch -m <название ветки> - переименовать ветку
    3)git push origin --delete <название ветки> - удалить ветку и удалённо и локально
    
  # Merge веток
    1)git merge -m "сообщение как у коммитов" <название ветки> - надо быть в ветке, куда надо мержить 




# Установка зависимостей
  # client
    1)npx create-react-app . --template typescript
    2)npm install mobx-react-lite
    3)npm install axios

  # server
    1)npm init -y (при полной загрузке, если реп в теории не надо)
    2)npm i express cors cookie-parser
    3)npm i nodemon --save-dev
    4)npm install dotenv --save
    5)npm install mongodb
    6)npm install mongoose
    7)npm install bcryptjs
    8)npm install jsonwebtoken
    9)npm install express-validator
    10)("scripts": "dev": "nodemon index.js") в файле package.json для автоматического запуска bd