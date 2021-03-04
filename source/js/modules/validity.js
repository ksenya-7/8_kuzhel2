const MIN_TEXT_LENGTH = 3;
const TEL_LENGTH = 17;

let isStorageSupport = true;
let storageText = '';
let storageTel = '';
let storageMessage = '';

const validity = (text, tel, message, btn, form) => {
  try {
    storageText = localStorage.getItem('user-name');
  } catch (err) {
    isStorageSupport = false;
  }

  try {
    storageTel = localStorage.getItem('phone');
  } catch (err) {
    isStorageSupport = false;
  }

  try {
    storageMessage = localStorage.getItem('message');
  } catch (err) {
    isStorageSupport = false;
  }

  if (isStorageSupport) {
    storageText = localStorage.getItem('user-name', text.value);
    storageTel = localStorage.getItem('phone', text.value);
    storageMessage = localStorage.getItem('message', text.value);

    text.value = storageText;
    tel.value = storageTel;
    message.value = storageMessage;
  }

  if (btn) {
    btn.addEventListener('click', (evt) => {
      let isLengthOfText = true;
      let isLengthOfTel = true;

      if (text) {
        const nameUser = text.value;
        isLengthOfText = nameUser.length < MIN_TEXT_LENGTH;
      }
      if (tel) {
        const telUser = tel.value;
        isLengthOfTel = telUser.length !== TEL_LENGTH;
      }

      if (isLengthOfText) {
        evt.preventDefault();
        text.classList.add('js-invalid');
      } else if (isLengthOfTel) {
        evt.preventDefault();
        tel.classList.add('js-invalid');
      } else {
        text.classList.remove('js-invalid');
        tel.classList.remove('js-invalid');
      }

      text.reportValidity();
      tel.reportValidity();
    });
  }

  form.addEventListener('submit', function (evt) {
    text.focus();

    if (!text.value || !tel.value) {
      evt.preventDefault();
      text.classList.remove('js-invalid');
      tel.classList.remove('js-invalid');
      text.offsetWidth = text.offsetWidth;
      tel.offsetWidth = tel.offsetWidth;
      text.classList.add('js-invalid');
      tel.classList.add('js-invalid');
    } else {
      if (isStorageSupport) {
        localStorage.setItem('user-name', text.value);
        localStorage.setItem('phone', tel.value);
        localStorage.setItem('message', message.value);
      }
    }
  });
};

export {validity};
