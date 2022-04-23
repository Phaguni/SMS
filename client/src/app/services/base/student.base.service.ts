/**
 *
 *
  _____                      _              _ _ _     _   _     _        __ _ _
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|

 * DO NOT EDIT THIS FILE!!
 *
 *  FOR CUSTOMIZE studentBaseService PLEASE EDIT ../student.service.ts
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */
 // DEPENDENCIES
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

// CONFIG
import { environment } from '../../../environments/environment';

// MODEL
import { Student } from '../../domain/sms_db/student';

/**
 * THIS SERVICE MAKE HTTP REQUEST TO SERVER, FOR CUSTOMIZE IT EDIT ../Student.service.ts
 */

/*
 * SCHEMA DB Student
 *
	{
		Class: {
			type: 'Number',
			required : true
		},
		FathersName: {
			type: 'String'
		},
		FirstName: {
			type: 'String',
			required : true
		},
		LastName: {
			type: 'String',
			required : true
		},
		MiddleName: {
			type: 'String'
		},
		MothersName: {
			type: 'String'
		},
		RollNumber: {
			type: 'Custom',
			required : true
		},
		//RELATIONS
		//EXTERNAL RELATIONS
		_Student: {
			type: Schema.ObjectId,
			ref : "User"
		},
		_Student: {
			type: Schema.ObjectId,
			ref : "Teacher"
		},
		_Teacher: {
			type: Schema.ObjectId,
			ref : "Student"
		},
	}
 *
 */
@Injectable()
export class StudentBaseService {

    contextUrl: string = environment.endpoint + '/student';
    constructor(
        protected http: HttpClient
        ) { }

    // CRUD METHODS

    /**
    * StudentService.create
    *   @description CRUD ACTION create
    *
    */
    create(item: Student): Observable<Student> {
        return this.http
            .post<Student>(this.contextUrl, item)
            .pipe(map(data => data));
    }

    /**
    * StudentService.delete
    *   @description CRUD ACTION delete
    *
    */
    remove(id: string): Observable<void> {
        return this.http
            .delete<void>(this.contextUrl + '/' + id)
            .pipe(map(data => data));
    }

    /**
    * StudentService.findByClass
    *   @description CRUD ACTION findByClass
    *
    */
    findByClass(id: string): Observable<Student[]> {
        return this.http
            .get<Student[]>(this.contextUrl + '/findByClass/' + id)
            .pipe(
                map(response => response)
            );
    }

    /**
    * StudentService.findByFirstName
    *   @description CRUD ACTION findByFirstName
    *
    */
    findByFirstName(id: string): Observable<Student[]> {
        return this.http
            .get<Student[]>(this.contextUrl + '/findByFirstName/' + id)
            .pipe(
                map(response => response)
            );
    }

    /**
    * StudentService.findByRollNumber
    *   @description CRUD ACTION findByRollNumber
    *
    */
    findByRollNumber(id: string): Observable<Student[]> {
        return this.http
            .get<Student[]>(this.contextUrl + '/findByRollNumber/' + id)
            .pipe(
                map(response => response)
            );
    }

    /**
    * StudentService.update
    *   @description CRUD ACTION update
    *   @returns Student
    *
    */
    update(item: Student): Observable<Student> {
        return this.http
            .post<Student>(this.contextUrl + '/' + item._id, item)
            .pipe(map(data => data));
    }


    // Custom APIs

}