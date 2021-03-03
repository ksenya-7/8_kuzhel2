const MIN_TEXT_LENGTH = 3;
const TEL_LENGTH = 17;
const textInput = document.querySelector('.modal__form input[type="text"]');
const telInput = document.querySelector('.modal__form input[type="tel"]');
const message = document.querySelector('.modal__form textarea');
const buttonSubmit = document.querySelector('.modal__button');
const form = document.querySelector('.modal form');
let isStorageSupport = true;
let storageText = '';
let storageTel = '';
let storageMessage = '';

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
  storageText = localStorage.getItem('user-name', textInput.value);
  storageTel = localStorage.getItem('phone', textInput.value);
  storageMessage = localStorage.getItem('message', textInput.value);

  textInput.value = storageText;
  telInput.value = storageTel;
  message.value = storageMessage;
}

const formModalValidity = () => {
  if (buttonSubmit) {
    buttonSubmit.addEventListener('click', (evt) => {
      let isLengthOfText = true;
      let isLengthOfTel = true;

      if (textInput) {
        const text = textInput.value;
        isLengthOfText = text.length < MIN_TEXT_LENGTH;
      }
      if (telInput) {
        const tel = telInput.value;
        isLengthOfTel = tel.length !== TEL_LENGTH;
      }

      if (isLengthOfText) {
        evt.preventDefault();
        textInput.classList.add('js-invalid');
      } else if (isLengthOfTel) {
        evt.preventDefault();
        telInput.classList.add('js-invalid');
      } else {
        textInput.classList.remove('js-invalid');
        telInput.classList.remove('js-invalid');
      }

      textInput.reportValidity();
      telInput.reportValidity();
    });
  }

  form.addEventListener('submit', function (evt) {
    textInput.focus();

    if (!textInput.value || !telInput.value) {
      evt.preventDefault();
      textInput.classList.remove('js-invalid');
      telInput.classList.remove('js-invalid');
      textInput.offsetWidth = textInput.offsetWidth;
      telInput.offsetWidth = telInput.offsetWidth;
      textInput.classList.add('js-invalid');
      telInput.classList.add('js-invalid');
    } else {
      if (isStorageSupport) {
        localStorage.setItem('user-name', textInput.value);
        localStorage.setItem('phone', telInput.value);
        localStorage.setItem('message', message.value);
      }
    }
  });
};

export {formModalValidity};
