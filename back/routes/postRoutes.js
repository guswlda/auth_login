const router = require('express').Router();
const { postTask } = require('../controllers/postTask');
const { postUser, loginUser } = require('../controllers/postUser');

// controller post 방식으로 postgresql에서 데이터를 가져오면 route를 통해 index.js로 보내줌
router.post('/post_task', postTask);
router.post('/register', postUser);
router.post('/login', loginUser);

module.exports = router;
