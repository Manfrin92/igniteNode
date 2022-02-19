import { Request, Response } from "express";
import CreateCourseService from "./CreateCourseService";

export function createCourse(request: Request, response: Response) {
    CreateCourseService.execute({
        name: "Ignite",
        duration: 200,
        educator: "Dani",
    });

    return response.send("Olar");
}
