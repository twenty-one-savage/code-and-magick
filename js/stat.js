'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_SHADOW_X = 110;
var CLOUD_SHADOW_Y = 20;
var COLUMN_WIDTH = 40;
var COLUMN_HEIGHT = 150;
var FIRST_PLAYER_X = 120;
var PLAYER_Y = 75;
var GAP_X_BETWEEN_PLAYERS = 50;
var GAP = 15;

var names = [];
var times = [];

var createColumn = function (ctx, nickname, x, y, width, height, color) {
  ctx.fillStyle = color;
  ctx.fillText(nickname, x, y);
  ctx.fillRect(x, y + GAP, width, height);
};

var createCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

window.renderStatistics = function (ctx, names, times) {
  // Создаём тень для окна статистики
  createCloud(ctx, CLOUD_SHADOW_X, CLOUD_SHADOW_Y, 'rgba(0, 0, 0, 0.7)');

  // Создаём окно со статистикой
  createCloud(ctx, CLOUD_X, CLOUD_Y, '#734b93');
  names.forEach(function (name, index) {
    createColumn(ctx, name, (FIRST_PLAYER_X) + (index * GAP_X_BETWEEN_PLAYERS), PLAYER_Y, COLUMN_WIDTH, COLUMN_HEIGHT, '#000');
  });
  // Отрисовка имён
  // createColumn(ctx, 'Вы', FIRST_PLAYER_X, PLAYER_Y, COLUMN_WIDTH, COLUMN_HEIGHT, '#000');
  // createColumn(ctx, 'Вася', FIRST_PLAYER_X + GAP_X_BETWEEN_PLAYERS, PLAYER_Y, COLUMN_WIDTH, COLUMN_HEIGHT, '#0F0');
  // createColumn(ctx, 'Sudo', FIRST_PLAYER_X + GAP_X_BETWEEN_PLAYERS * 2, PLAYER_Y, COLUMN_WIDTH, COLUMN_HEIGHT, '#0F0');
  // createColumn(ctx, 'RM-RF', FIRST_PLAYER_X + GAP_X_BETWEEN_PLAYERS * 3, PLAYER_Y, COLUMN_WIDTH, COLUMN_HEIGHT, '#0F0');
  // createColumn(ctx, 'Сергей', FIRST_PLAYER_X + GAP_X_BETWEEN_PLAYERS * 4, PLAYER_Y, COLUMN_WIDTH, COLUMN_HEIGHT, '#0F0');
};
