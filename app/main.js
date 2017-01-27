/**
 * Created by "s.t.o.k.a.t.o" on 27.01.2017.
 *
 * Инициализируем платформу
 * Запускаем приложение
 * Загружаем основной модуль
 */
"use strict";
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var app_module_1 = require("./app.module");
var platform = platform_browser_dynamic_1.platformBrowserDynamic();
platform.bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=main.js.map