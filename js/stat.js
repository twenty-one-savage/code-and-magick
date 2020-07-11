'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_FILL = '#734b93';
var CLOUD_SHADOW_X = 110;
var CLOUD_SHADOW_Y = 20;
var COLUMN_WIDTH = 40;
var COLUMN_HEIGHT = 150;
var FIRST_PLAYER_X = 120;
var PLAYER_Y = 250;
var FIRST_PLAYER_TIME_X = FIRST_PLAYER_X;
var GAP_TIME_Y = 70;
var GAP_X_BETWEEN_PLAYERS = COLUMN_WIDTH + 50;
var WIN_TEXT_X = 225;
var WIN_TEXT_Y = 50;
var GAP = 15;

var createCloud = function (ctx, x, y, color) {

  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);

};

var createWinText = function (ctx) {

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', WIN_TEXT_X, WIN_TEXT_Y);
  ctx.fillText('Список результатов:', WIN_TEXT_X - GAP, WIN_TEXT_Y + GAP);

};

var createColumn = function (ctx, name, nameX, nameY, width, height, timeX) {

  var columnHeight = -(Math.random() * height);

  if (name === 'Вы') {
    ctx.fillStyle = '#000';
  } else {
    ctx.fillStyle = 'rgba(17, 22, 186,' + (Math.random() * 1) + '';
  }

  // Вывод имени
  ctx.fillText(name, nameX, nameY);

  // Вывод времени
  ctx.fillText(Math.ceil(Math.abs(columnHeight) * 100), timeX, columnHeight + (height + GAP_TIME_Y));

  // Вывод колонки
  ctx.fillRect(nameX, nameY - GAP, width, columnHeight);

};

window.renderStatistics = function (ctx, names) {

  // Создаём тень для окна статистики
  createCloud(ctx, CLOUD_SHADOW_X, CLOUD_SHADOW_Y, 'rgba(0, 0, 0, 0.7)');

  // Создаём окно со статистикой
  createCloud(ctx, CLOUD_X, CLOUD_Y, CLOUD_FILL);

  // Выводим победный текст
  createWinText(ctx);

  // Отрисовка колонок игроков
  names.forEach(function (name, index) {
    createColumn(ctx, name, (FIRST_PLAYER_X) + (index * GAP_X_BETWEEN_PLAYERS), PLAYER_Y, COLUMN_WIDTH, COLUMN_HEIGHT, (FIRST_PLAYER_TIME_X) + (index * GAP_X_BETWEEN_PLAYERS));
  });

};
