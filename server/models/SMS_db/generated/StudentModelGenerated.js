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
 *  TO CUSTOMIZE StudentModelGenerated.js PLEASE EDIT ../StudentModel.js
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
      * Student
      */
    const studentSchema = new mongoose.Schema({
      Class: {
        type: "Number", 
        required: true
      },
      FathersName: {
        type: "String"
      },
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
      MothersName: {
        type: "String"
      },
      RollNumber: {
        type: "Object", 
        required: true
      },
      // RELATIONS
      _Teacher: {
        type: Schema.ObjectId,
        ref: "Teacher"
      },
      
      
      // EXTERNAL RELATIONS
      /*
      _Student: {
        type: Schema.ObjectId,
        ref: "Class"
      },
      _Student: {
        type: Schema.ObjectId,
        ref: "User"
      },
      _Student: {
        type: Schema.ObjectId,
        ref: "Teacher"
      },
      */
    });

    generatedModel.setModel(db.connection.model("Student", studentSchema));

    return studentSchema;
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
  * StudentModel.create
  *   @description CRUD ACTION create
  *
  */
  async create(item) {
    const obj = new generatedModel.model(item);
    return await obj.save();
  },
  
  /**
  * StudentModel.delete
  *   @description CRUD ACTION delete
  *
  */
  async delete(id) {
    return await generatedModel.model.findByIdAndRemove(id);
  },
  
  /**
  * StudentModel.findByClass
  *   @description CRUD ACTION findByClass
  *
  */
  async findByClass(key) {
    return await generatedModel.model.find({ 'Class' : key});
  },
  
  /**
  * StudentModel.findByFirstName
  *   @description CRUD ACTION findByFirstName
  *
  */
  async findByFirstName(key) {
    return await generatedModel.model.find({ 'FirstName' : key});
  },
  
  /**
  * StudentModel.findByRollNumber
  *   @description CRUD ACTION findByRollNumber
  *
  */
  async findByRollNumber(key) {
    return await generatedModel.model.find({ 'RollNumber' : key});
  },
  
  /**
  * StudentModel.findBy_Teacher
  *   @description CRUD ACTION findBy_Teacher
  *   @param Objectid key Id of model to search for
  *
  */
  async findBy_Teacher(key) {
    return await generatedModel.model.find({ '_Teacher' : key});
  },
  
  /**
  * StudentModel.get
  *   @description CRUD ACTION get
  *   @param ObjectId id Id resource
  *
  */
  async get(id) {
    return await generatedModel.model.findOne({ _id : id });
  },
  
  /**
  * StudentModel.list
  *   @description CRUD ACTION list
  *
  */
  async list() {
    return await generatedModel.model.find();
  },
  
  /**
  * StudentModel.update
  *   @description CRUD ACTION update
  *   @returns Student
  *
  */
  async update(item) { 
    return await generatedModel.model.findOneAndUpdate({ _id: item._id }, item, {'new': true});
  },
  


};

export default generatedModel;
