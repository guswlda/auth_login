const PORT = '8080'; // 8080 포트를 사용
const express = require('express'); // express 모듈 사용
const cors = require('cors'); // cors 모듈 사용
const cookieParser = require('cookie-parser')

const app = express(); // express 모듈을 app 변수 할당

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
})); 

app.use(express.json()); 
app.use(cookieParser());

app.use(require('./routes/postRoutes'))

app.listen(PORT, () => console.log(`Server is running on ${PORT}`)); // 서버 실행 시 메시지 출력
