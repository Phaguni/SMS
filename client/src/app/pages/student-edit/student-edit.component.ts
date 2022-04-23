// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { StudentService } from '../../services/student.service';
import { TeacherService } from '../../services/teacher.service';
import { UserService } from '../../services/user.service';
import { ClassService } from '../../services/class.service';
// Import Models
import { Student } from '../../domain/sms_db/student';
import { Class } from '../../domain/sms_db/class';
import { User } from '../../domain/sms_db/user';
import { Teacher } from '../../domain/sms_db/teacher';

// START - USED SERVICES
/**
* StudentService.create
*	@description CRUD ACTION create
*
* StudentService.update
*	@description CRUD ACTION update
*	@returns Student
*
* StudentService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id resource
*
* TeacherService.findBy_Student
*	@description CRUD ACTION findBy_Student
*
* TeacherService.list
*	@description CRUD ACTION list
*
* UserService.findBy_Student
*	@description CRUD ACTION findBy_Student
*
* ClassService.findBy_Student
*	@description CRUD ACTION findBy_Student
*	@param Objectid key Id of model to search for
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a Student
 */
@Component({
    selector: 'app-student-edit',
    templateUrl: 'student-edit.component.html',
    styleUrls: ['student-edit.component.css']
})
export class StudentEditComponent implements OnInit {
    item: Student;
    list_Teacher: Teacher[];
    externalClass__Student: Class[];
    externalUser__Student: User[];
    externalTeacher__Student: Teacher[];
    model: Student;
    formValid: Boolean;

    constructor(
    private studentService: StudentService,
    private teacherService: TeacherService,
    private userService: UserService,
    private classService: ClassService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new Student();
        this.externalClass__Student = [];
        this.externalUser__Student = [];
        this.externalTeacher__Student = [];
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.studentService.get(id).subscribe(item => this.item = item);
                this.classService.findBy_Student(id).subscribe(list => this.externalClass__Student = list);
                this.userService.findBy_Student(id).subscribe(list => this.externalUser__Student = list);
                this.teacherService.findBy_Student(id).subscribe(list => this.externalTeacher__Student = list);
            }
            // Get relations
            this.teacherService.list().subscribe(list => this.list_Teacher = list);
        });
    }


    /**
     * Save Student
     *
     * @param {boolean} formValid Form validity check
     * @param Student item Student to save
     */
    save(formValid: boolean, item: Student): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.studentService.update(item).subscribe(data => this.goBack());
            } else {
                this.studentService.create(item).subscribe(data => this.goBack());
            } 
        }
    }

    /**
     * Go Back
     */
    goBack(): void {
        this.location.back();
    }


}



