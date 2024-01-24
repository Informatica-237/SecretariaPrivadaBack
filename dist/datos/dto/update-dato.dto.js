"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDatoDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_dato_dto_1 = require("./create-dato.dto");
class UpdateDatoDto extends (0, mapped_types_1.PartialType)(create_dato_dto_1.CreateDatoDto) {
}
exports.UpdateDatoDto = UpdateDatoDto;
//# sourceMappingURL=update-dato.dto.js.map