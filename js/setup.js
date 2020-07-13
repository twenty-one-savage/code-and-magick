'use strict';

var REQUIRED_NUMBERS_OF_MAGES = 4;
var ENTER_KEYCODE = 13;
var ESC_KEYCODE = 27;

var createWizardsArray = function () {
  var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

  var wizardsArray = [];

  var shuffleArrays = function () {
    var shuffle = function (array) {
      for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var t = array[i];
        array[i] = array[j];
        array[j] = t;
      }
    };

    for (var i = 0; i < arguments.length; i++) {
      shuffle(arguments[i]);
    }
  };


  shuffleArrays(WIZARD_NAMES, WIZARD_SURNAMES, WIZARD_COAT_COLORS, WIZARD_EYES_COLORS);

  for (var i = 0; i < REQUIRED_NUMBERS_OF_MAGES; i++) {
    var newWizard = {
      name: WIZARD_NAMES[i] + ' ' + WIZARD_SURNAMES[i],
      coatColor: WIZARD_COAT_COLORS[i],
      eyesColor: WIZARD_EYES_COLORS[i],
    };

    wizardsArray.push(newWizard);
  }

  return wizardsArray;
};

var wizards = createWizardsArray();

var showDOMElement = function (el) {
  el.classList.remove('hidden');
};

var hideDOMElement = function (el) {
  el.classList.add('hidden');
};

var setupElement = document.querySelector('.setup');

var setupOpenElement = document.querySelector('.setup-open');

var setupCloseElement = setupElement.querySelector('.setup-close');

var setupOpenElementClickHandler = function () {
  document.addEventListener('keydown', documentEscPressHandler);
  showDOMElement(setupElement);
};

var setupOpenElementEnterPressHandler = function (evt) {
  document.addEventListener('keydown', documentEscPressHandler);
  return evt.keyCode === ENTER_KEYCODE ? showDOMElement(setupElement) : false;
};

var setupCloseElementClickHandler = function () {
  hideDOMElement(setupElement);
  document.removeEventListener('keydown', documentEscPressHandler);
};

var setupCloseElementEnterPressHandler = function (evt) {
  document.removeEventListener('keydown', documentEscPressHandler);
  return evt.keyCode === ENTER_KEYCODE ? hideDOMElement(setupElement) : false;
};

var documentEscPressHandler = function (evt) {
  var userInput = document.querySelector('.setup-user-name');
  if (evt.keyCode === ESC_KEYCODE && userInput !== document.activeElement) {
    hideDOMElement(setupElement);
  }
};

setupOpenElement.addEventListener('click', setupOpenElementClickHandler);
setupOpenElement.addEventListener('keydown', setupOpenElementEnterPressHandler);

setupCloseElement.addEventListener('click', setupCloseElementClickHandler);
setupCloseElement.addEventListener('keydown', setupCloseElementEnterPressHandler);

var userNameInputElement = setupElement.querySelector('.setup-user-name');

var userNameInputElementInvalidHandler = function () {
  var el = userNameInputElement;
  if (el.validity.tooShort) {
    el.setCustomValidity('The name must consist of at least 2 characters');
  } else if (el.validity.tooLong) {
    el.setCustomValidity('Name must not exceed 25 characters');
  } else if (el.validity.valueMissing) {
    el.setCustomValidity('Required field');
  } else {
    el.setCustomValidity('');
  }
};

userNameInputElement.addEventListener('invalid', userNameInputElementInvalidHandler);

var setupSimilarElement = setupElement.querySelector('.setup-similar');
showDOMElement(setupSimilarElement);

var similarListElement = setupSimilarElement.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var makeFragment = function (arr) {
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < arr.length; i++) {
    fragment.appendChild(renderWizard(arr[i]));
  }

  return fragment;
};

similarListElement.appendChild(makeFragment(wizards));
