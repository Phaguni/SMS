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
 *  FOR CUSTOMIZE classBaseService PLEASE EDIT ../class.service.ts
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
import { Class } from '../../domain/sms_db/class';

/**
 * THIS SERVICE MAKE HTTP REQUEST TO SERVER, FOR CUSTOMIZE IT EDIT ../Class.service.ts
 */

/*
 * SCHEMA DB Class
 *
	{
		ClassName: {
			type: 'Number',
			required : true
		},
		Section: {
			type: 'String'
		},
		//RELATIONS
		//EXTERNAL RELATIONS
		_Student: {
			type: Schema.ObjectId,
			ref : "Class"
		},
		_Teacher: {
			type: Schema.ObjectId,
			ref : "Class"
		},
	}
 *
 */
@Injectable()
export class ClassBaseService {

    contextUrl: string = environment.endpoint + '/class';
    constructor(
        protected http: HttpClient
        ) { }

    // CRUD METHODS

    /**
    * ClassService.create
    *   @description CRUD ACTION create
    *
    */
    create(item: Class): Observable<Class> {
        return this.http
            .post<Class>(this.contextUrl, item)
            .pipe(map(data => data));
    }

    /**
    * ClassService.delete
    *   @description CRUD ACTION delete
    *   @param ObjectId id Id
    *
    */
    remove(id: string): Observable<void> {
        return this.http
            .delete<void>(this.contextUrl + '/' + id)
            .pipe(map(data => data));
    }

    /**
    * ClassService.findBy_Student
    *   @description CRUD ACTION findBy_Student
    *   @param Objectid key Id of model to search for
    *
    */
    findBy_Student(id: string): Observable<Class[]> {
        return this.http
            .get<Class[]>(this.contextUrl + '/findBy_Student/' + id)
            .pipe(
                map(response => response)
            );
    }

    /**
    * ClassService.findBy_Teacher
    *   @description CRUD ACTION findBy_Teacher
    *   @param Objectid key Id of model to search for
    *
    */
    findBy_Teacher(id: string): Observable<Class[]> {
        return this.http
            .get<Class[]>(this.contextUrl + '/findBy_Teacher/' + id)
            .pipe(
                map(response => response)
            );
    }

    /**
    * ClassService.get
    *   @description CRUD ACTION get
    *   @param ObjectId id Id resource
    *
    */
    get(id: string): Observable<Class> {
        return this.http
            .get<Class>(this.contextUrl + '/' + id)
            .pipe(map(data => data));
    }

    /**
    * ClassService.get_Student
    *   @description CRUD ACTION get_Student
    *
    */
    get_Student(id: string): Observable<any[]> {
        return this.http
            .get<any[]>(this.contextUrl + '/' + id + 'get_Student')
            .pipe(
                map(response => response)
            );
     }

    /**
    * ClassService.get_Teacher
    *   @description CRUD ACTION get_Teacher
    *
    */
    get_Teacher(id: string): Observable<any[]> {
        return this.http
            .get<any[]>(this.contextUrl + '/' + id + 'get_Teacher')
            .pipe(
                map(response => response)
            );
     }

    /**
    * ClassService.list
    *   @description CRUD ACTION list
    *
    */
    list(): Observable<Class[]> {
        return this.http
            .get<Class[]>(this.contextUrl)
            .pipe(map(data => data));
    }

    /**
    * ClassService.update
    *   @description CRUD ACTION update
    *   @param ObjectId id Id
    *
    */
    update(item: Class): Observable<Class> {
        return this.http
            .post<Class>(this.contextUrl + '/' + item._id, item)
            .pipe(map(data => data));
    }


    // Custom APIs

}
