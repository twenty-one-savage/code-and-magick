'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var FILL_CLOUD = '#734b93';
var CLOUD_SHADOW_X = 110;
var CLOUD_SHADOW_Y = 20;
var COLUMN_WIDTH = 40;
var COLUMN_HEIGHT = 150;
var FIRST_PLAYER_X = 120;
var PLAYER_Y = 250;
var FIRST_PLAYER_TIME_X = FIRST_PLAYER_X;
var GAP_TIME_Y = 70;
var GAP_X_BETWEEN_PLAYERS = 100;
var WIN_TEXT_X = 150;
var WIN_TEXT_Y = 50;
var GAP = 15;

var createCloud = function (ctx, x, y, color) {

  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);

};

var createWinText = function (ctx) {

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!\nСписок результатов:', WIN_TEXT_X, WIN_TEXT_Y);

};

var createColumn = function (ctx, name, x, y, width, height, color, a, time) {

  var columnHeight = -(Math.random() * height);

  // Цвет имени и колнки
  ctx.fillStyle = color;
  // Вывод имени

  ctx.fillText(name, x, y);

  // Вывод времени
  ctx.fillText(time, a, columnHeight + (height + GAP_TIME_Y));

  // Вывод колонки
  ctx.fillRect(x, y - GAP, width, columnHeight);

};

window.renderStatistics = function (ctx, names) {

  // Создаём тень для окна статистики
  createCloud(ctx, CLOUD_SHADOW_X, CLOUD_SHADOW_Y, 'rgba(0, 0, 0, 0.7)');

  // Создаём окно со статистикой
  createCloud(ctx, CLOUD_X, CLOUD_Y, FILL_CLOUD);

  // Выводим победный текст
  createWinText(ctx);

  // Отрисовка колонок игроков
  names.forEach(function (name, index) {

    if (name === 'Вы') {
      createColumn(ctx, name, (FIRST_PLAYER_X) + (index * GAP_X_BETWEEN_PLAYERS), PLAYER_Y, COLUMN_WIDTH, COLUMN_HEIGHT, '#000', (FIRST_PLAYER_TIME_X) + (index * GAP_X_BETWEEN_PLAYERS), Math.ceil((Math.random() * 10000)));
    } else {
      createColumn(ctx, name, (FIRST_PLAYER_X) + (index * GAP_X_BETWEEN_PLAYERS), PLAYER_Y, COLUMN_WIDTH, COLUMN_HEIGHT, 'rgba(17, 22, 186,' + (Math.random() * 1) + '', (FIRST_PLAYER_TIME_X) + (index * GAP_X_BETWEEN_PLAYERS), Math.ceil((Math.random() * 100)));
    }

  });

};
