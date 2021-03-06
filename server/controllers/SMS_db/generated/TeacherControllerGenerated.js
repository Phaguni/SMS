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
 *  TO CUSTOMIZE TeacherControllerGenerated.js PLEASE EDIT ../TeacherController.js
 * 
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 * 
 */
import Properties from "../../../properties";
import TeacherModel from "../../../models/SMS_db/TeacherModel";
import ErrorManager from "../../../classes/ErrorManager";
import { authorize } from "../../../security/SecurityManager";
import TeacherController from "../TeacherController";

const generatedControllers = {
  /**
   * Init routes
   */
  init: router => {
    const baseUrl = `${Properties.api}/teacher`;
    router.post(baseUrl + "", authorize(["ADMIN"]), TeacherController.create);
    router.delete(baseUrl + "/:id", authorize(["ADMIN"]), TeacherController.delete);
    router.get(baseUrl + "/findByFirstName/:key", authorize([]), TeacherController.findByFirstName);
    router.get(baseUrl + "/findBy_Student/:key", authorize([]), TeacherController.findBy_Student);
    router.get(baseUrl + "/:id", authorize([]), TeacherController.get);
    router.get(baseUrl + "/:id/get_Student", authorize([]), TeacherController.get_Student);
    router.get(baseUrl + "", authorize([]), TeacherController.list);
    router.post(baseUrl + "/:id", authorize(["ADMIN"]), TeacherController.update);
  },


  // CRUD METHODS


  /**
  * TeacherModel.create
  *   @description CRUD ACTION create
  *
  */
  create: async (req, res) => {
    try {
      const result = await TeacherModel.create(req.body);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * TeacherModel.delete
  *   @description CRUD ACTION delete
  *
  */
  delete: async (req, res) => {
    try {
      const result = await TeacherModel.delete(req.params.id);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * TeacherModel.findByFirstName
  *   @description CRUD ACTION findByFirstName
  *
  */
  findByFirstName: async (req, res) => {
    try {
      const result = await TeacherModel.findByFirstName(req.params.key);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * TeacherModel.findBy_Student
  *   @description CRUD ACTION findBy_Student
  *
  */
  findBy_Student: async (req, res) => {
    try {
      const result = await TeacherModel.findBy_Student(req.params.key);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * TeacherModel.get
  *   @description CRUD ACTION get
  *   @param ObjectId id Id resource
  *
  */
  get: async (req, res) => {
    try {
      const result = await TeacherModel.get(req.params.id);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * TeacherModel.get_Student
  *   @description CRUD ACTION get_Student
  *
  */
  get_Student: async (req, res) => {
    try {
      const result = await TeacherModel.get_Student(req.params.id);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * TeacherModel.list
  *   @description CRUD ACTION list
  *
  */
  list: async (req, res) => {
    try {
      const result = await TeacherModel.list();
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  
  /**
  * TeacherModel.update
  *   @description CRUD ACTION update
  *   @returns Teacher
  *
  */
  update: async (req, res) => {
    try {
      const result = await TeacherModel.update(req.body);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  
  // Custom APIs

};

export default generatedControllers;
