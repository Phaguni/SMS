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
 *  TO CUSTOMIZE TeacherModelGenerated.js PLEASE EDIT ../TeacherModel.js
 * 
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 * 
 */
// Database
import Database from "../../../classes/Database_SMS_db";
import mongoose, { Schema } from "mongoose";

// Logger
import Logger from "../../../classes/Logger";

const generatedModel = {
  /**
   * Init  schema
   */
  init() {
    const db = Database.getConnection();

    /**
      * Teacher
      */
    const teacherSchema = new mongoose.Schema({
      FirstName: {
        type: "String", 
        required: true
      },
      LastName: {
        type: "String", 
        required: true
      },
      MiddleName: {
        type: "String"
      },
      // RELATIONS
      _Student: {
        type: Schema.ObjectId,
        ref: "Student"
      },
      
      
      // EXTERNAL RELATIONS
      /*
      _Teacher: {
        type: Schema.ObjectId,
        ref: "Student"
      },
      _Teacher: {
        type: Schema.ObjectId,
        ref: "Class"
      },
      _Teacher: {
        type: Schema.ObjectId,
        ref: "User"
      },
      */
    });

    generatedModel.setModel(db.connection.model("Teacher", teacherSchema));

    return teacherSchema;
  },

  /**
   * Set Model
   */
  setModel: model => {
    generatedModel.model = model;
  },

  /**
   * Get model
   */
  getModel: () => {
    return generatedModel.model;
  },

  // Start queries
    

  // CRUD METHODS


  /**
  * TeacherModel.create
  *   @description CRUD ACTION create
  *
  */
  async create(item) {
    const obj = new generatedModel.model(item);
    return await obj.save();
  },
  
  /**
  * TeacherModel.delete
  *   @description CRUD ACTION delete
  *
  */
  async delete(id) {
    return await generatedModel.model.findByIdAndRemove(id);
  },
  
  /**
  * TeacherModel.findByFirstName
  *   @description CRUD ACTION findByFirstName
  *
  */
  async findByFirstName(key) {
    return await generatedModel.model.find({ 'FirstName' : key});
  },
  
  /**
  * TeacherModel.findBy_Student
  *   @description CRUD ACTION findBy_Student
  *
  */
  async findBy_Student(key) {
    return await generatedModel.model.find({ '_Student' : key});
  },
  
  /**
  * TeacherModel.get
  *   @description CRUD ACTION get
  *   @param ObjectId id Id resource
  *
  */
  async get(id) {
    return await generatedModel.model.findOne({ _id : id });
  },
  
  /**
  * TeacherModel.get_Student
  *   @description CRUD ACTION get_Student
  *
  */
  async get_Student(id) {
    return await generatedModel.model.findOne({ _id : id}).populate("_Student")
  },
  
  /**
  * TeacherModel.list
  *   @description CRUD ACTION list
  *
  */
  async list() {
    return await generatedModel.model.find();
  },
  
  /**
  * TeacherModel.update
  *   @description CRUD ACTION update
  *   @returns Teacher
  *
  */
  async update(item) { 
    return await generatedModel.model.findOneAndUpdate({ _id: item._id }, item, {'new': true});
  },
  


};

export default generatedModel;
