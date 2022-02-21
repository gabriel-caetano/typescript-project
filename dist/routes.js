"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCourse = void 0;
const CreateCourseService_1 = __importDefault(require("./CreateCourseService"));
function createCourse(request, response) {
    const course1 = { name: "NodeJS", educator: "Caetano" };
    const course2 = { name: "NodeJS", duration: 5, educator: "Caetano" };
    CreateCourseService_1.default.execute(course1);
    CreateCourseService_1.default.execute(course2);
    return response.send();
}
exports.createCourse = createCourse;
