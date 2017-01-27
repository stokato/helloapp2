/**
 * Created by "s.t.o.k.a.t.o" on 27.01.2017.
 *
 * Инициализируем платформу
 * Запускаем приложение
 * Загружаем основной модуль
 */

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

const platform = platformBrowserDynamic();

platform.bootstrapModule(AppModule);