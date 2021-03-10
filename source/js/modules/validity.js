const MIN_TEXT_LENGTH = 1;
const TEL_LENGTH = 17;

let isStorageSupport = true;
let storageText = '';
let storageTel = '';
let storageMessage = '';

const initValidity = (name, tel, message, btn, checkbox, label, form, btnClose) => {
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
    storageText = localStorage.getItem('user-name', name.value);
    storageTel = localStorage.getItem('phone', tel.value);
    storageMessage = localStorage.getItem('message', message.value);

    name.value = storageText;
    tel.value = storageTel;
    message.value = storageMessage;
  }

  if (btn) {
    btn.addEventListener('click', (evt) => {
      let isLengthOfText = true;
      let isLengthOfTel = true;

      if (name) {
        const nameUser = name.value;
        isLengthOfText = nameUser.length < MIN_TEXT_LENGTH;
      }
      if (tel) {
        const telUser = tel.value;
        isLengthOfTel = telUser.length !== TEL_LENGTH;
      }

      if (isLengthOfText) {
        evt.preventDefault();
        name.classList.add('js-invalid');
      } else if (isLengthOfTel) {
        evt.preventDefault();
        tel.classList.add('js-invalid');
      } else {
        name.classList.remove('js-invalid');
        tel.classList.remove('js-invalid');
      }

      name.reportValidity();
      tel.reportValidity();
    });
  }

  form.addEventListener('submit', (evt) => {
    btnClose.focus();

    if (!name.value || !tel.value || !checkbox.checked) {
      evt.preventDefault();
      name.classList.add('js-invalid');
      tel.classList.add('js-invalid');
      label.classList.add('js-unchecked');
    } else if (isStorageSupport) {
      localStorage.setItem('user-name', name.value);
      localStorage.setItem('phone', tel.value);
      localStorage.setItem('message', message.value);
    }
  });
};

export {initValidity};
