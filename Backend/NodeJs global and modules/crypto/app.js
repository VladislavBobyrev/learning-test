const crypto = require('crypto')
const start = performance.now()

// ПЕРЕДАЕМ НАГРУЖЕННЫЙ КОД В ЦПУ ПРОЦЕССОРА
process.env.UV_THREADPOOL_SIZE = 8

for (let i = 0; i < 1000; i++)
{
  crypto.pbkdf2('test', 'salt', 1000, 64, 'sha512', (e) =>
  {
    console.log(performance.now() - start)
  })
}