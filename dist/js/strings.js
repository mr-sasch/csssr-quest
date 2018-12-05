/* Расскажите о себе словами */
const areaHeight = () => {

  let wordsTextarea = document.querySelector('#words__textarea'),
  wordsTextareaWrap = wordsTextarea.clientHeight,
  wordsTextareaSelf = wordsTextarea.scrollHeight;

  wordsTextarea.style.height = wordsTextareaWrap + 'px';

  /* Увеличивается или уменьшается строка */
  let valueOld = wordsTextarea.value,
  valueOldLength = valueOld.length,
  valueNew = wordsTextarea.getAttribute('value'),
  valueNewLength = valueNew.length;

  if (valueOldLength < valueNewLength) {
    // console.log('строка уменьшается');

    wordsTextarea.style.height = 'auto';
    wordsTextareaSelf = wordsTextarea.scrollHeight;
    // console.log(wordsTextareaSelf);
    wordsTextarea.style.height = wordsTextareaSelf + 'px';

  } else {
    // console.log('строка растет');
    if (wordsTextareaSelf >= wordsTextareaWrap) {
      wordsTextarea.style.height = wordsTextareaSelf + 'px';
    }
  }

  wordsTextarea.setAttribute('value', wordsTextarea.value);
  /* /Увеличивается или уменьшается строка */
}
/* /Расскажите о себе словами */
setTimeout(function(){
  var wordsTextarea = document.querySelector('#words__textarea');
  wordsTextarea.innerHTML = 'В CSSSR нравится возможность удаленной работы(мой идеальный формат), компания специализируется на фронтенде - значит есть возможность роста именно в этом направлении(то, что меня в первую очередь интересует), нравится внешняя деятельность - хоть и не часто, но регулярно обновляющийся блог и ютюбовский канал. Еще нравится CSS, СССР, Гагарин(привет прошлой версии сайта:)). И еще мой друг у вас работает :).';
  areaHeight();
}, 300);
