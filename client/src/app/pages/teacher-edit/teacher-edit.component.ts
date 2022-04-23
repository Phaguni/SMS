// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { TeacherService } from '../../services/teacher.service';
import { StudentService } from '../../services/student.service';
import { UserService } from '../../services/user.service';
import { ClassService } from '../../services/class.service';
// Import Models
import { Teacher } from '../../domain/sms_db/teacher';
import { Student } from '../../domain/sms_db/student';
import { Class } from '../../domain/sms_db/class';
import { User } from '../../domain/sms_db/user';

// START - USED SERVICES
/**
* TeacherService.create
*	@description CRUD ACTION create
*
* TeacherService.update
*	@description CRUD ACTION update
*	@returns Teacher
*
* TeacherService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id resource
*
* StudentService.list
*	@description CRUD ACTION list
*
* StudentService.findBy_Teacher
*	@description CRUD ACTION findBy_Teacher
*	@param Objectid key Id of model to search for
*
* UserService.findBy_Teacher
*	@description CRUD ACTION findBy_Teacher
*
* ClassService.findBy_Teacher
*	@description CRUD ACTION findBy_Teacher
*	@param Objectid key Id of model to search for
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a Teacher
 */
@Component({
    selector: 'app-teacher-edit',
    templateUrl: 'teacher-edit.component.html',
    styleUrls: ['teacher-edit.component.css']
})
export class TeacherEditComponent implements OnInit {
    item: Teacher;
    list_Student: Student[];
    externalStudent__Teacher: Student[];
    externalClass__Teacher: Class[];
    externalUser__Teacher: User[];
    model: Teacher;
    formValid: Boolean;

    constructor(
    private teacherService: TeacherService,
    private studentService: StudentService,
    private userService: UserService,
    private classService: ClassService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new Teacher();
        this.externalStudent__Teacher = [];
        this.externalClass__Teacher = [];
        this.externalUser__Teacher = [];
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.teacherService.get(id).subscribe(item => this.item = item);
                this.studentService.findBy_Teacher(id).subscribe(list => this.externalStudent__Teacher = list);
                this.classService.findBy_Teacher(id).subscribe(list => this.externalClass__Teacher = list);
                this.userService.findBy_Teacher(id).subscribe(list => this.externalUser__Teacher = list);
            }
            // Get relations
            this.studentService.list().subscribe(list => this.list_Student = list);
        });
    }


    /**
     * Save Teacher
     *
     * @param {boolean} formValid Form validity check
     * @param Teacher item Teacher to save
     */
    save(formValid: boolean, item: Teacher): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.teacherService.update(item).subscribe(data => this.goBack());
            } else {
                this.teacherService.create(item).subscribe(data => this.goBack());
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



