
/**
 * name - string
 * duration - number
 * educator - string
 */
export interface course {
  name: string;
  duration?: number;
  educator: string;
}


class CreateCourseService {
  execute({ name, duration = 8, educator }: course) {
    console.log(name, duration, educator);
  }
}

export default new CreateCourseService();