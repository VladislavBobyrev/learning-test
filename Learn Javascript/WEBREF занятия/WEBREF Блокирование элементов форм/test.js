   function agreeForm(f) {
    // Если поставлен флажок, снимаем блокирование кнопки
    if (f.agree.checked) f.submit.disabled = 0; 
    // В противном случае вновь блокируем кнопку
    else f.submit.disabled = 1;
   }