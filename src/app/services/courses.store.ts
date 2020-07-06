import { MessagesService } from "app/messages/messages.service";
import { LoadingService } from "app/loading/loading.service";
import { HttpClient } from "@angular/common/http";
import { map, tap } from "rxjs/operators";
import { CoursesService } from "./courses.service";
import { Course, sortCoursesBySeqNo } from "./../model/course";
import { Observable, BehaviorSubject } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class CoursesStore {
  private subject = new BehaviorSubject<Course[]>([]);

  courses$: Observable<Course[]> = this.subject.asObservable();

  constructor(
    private http: HttpClient,
    private loading: LoadingService,
    private messages: MessagesService,
    private coursesService: CoursesService
  ) {
    this.loadAllCourses();
  }

  filterByCategory(category: string): Observable<Course[]> {
    return this.courses$.pipe(
      map((courses) =>
        courses
          .filter((course) => course.category == category)
          .sort(sortCoursesBySeqNo)
      )
    );
  }

  private loadAllCourses() {
    const loadCourses$ = this.coursesService.loadAllCourses().pipe(
      tap((courses) => {
        this.subject.next(courses);
      })
    );
    this.loading.showloaderUntilCompleted(loadCourses$).subscribe();
  }

  saveCourse(courseId: string, changes: Partial<Course>): Observable<Course[]> {
    const courses = this.subject.getValue();
    const index = courses.findIndex((course) => course.id == courseId);
    const newCourse: Course = { ...courses[index], ...changes };

    courses[index] = newCourse;
    this.subject.next(courses);

    return this.coursesService.saveCourse(courseId, changes);
  }
}
