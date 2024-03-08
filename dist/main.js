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
<<<<<<< HEAD
            'http://localhost:8080'
=======
>>>>>>> 2e23c7670f09228b0c51f402c9a5499fe570c682
        ],
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        credentials: true,
    });
    const PORT = process.env.PORT ?? 3000;
    await app.listen(PORT);
}
bootstrap();
//# sourceMappingURL=main.js.map