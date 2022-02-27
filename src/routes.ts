import { Request, Response } from "express";
import CreateCourseService, { Course } from "./CreateCourseService";

export function createCourse(request: Request, response: Response) {
  const course1: Course = { name: "NodeJS", educator: "Caetano" };
  const course2: Course = {
    name: "NodeJS",
    duration: 5,
    educator: "Caetano",
  };
  CreateCourseService.execute(course1);
  CreateCourseService.execute(course2);
  return response.send()
}
