"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        origin: [
            'https://madariagasec.web.app',
            'https://madariagasec.firebaseapp.com',
            'http://localhost:8080'
        ],
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        credentials: true,
    });
    const PORT = process.env.PORT ?? 3000;
    await app.listen(PORT);
}
bootstrap();
//# sourceMappingURL=main.js.map