import * as config from '../config';
import classInterface from '../class/class.interface';
import mongoose, { Model, Schema, Document } from 'mongoose';

export const classSchema: Schema = new Schema({
    classID: { required: true, type: String, index: true, unique:true },
    className : { required: true, type: String },
    startTime: { required: true, type: Number },
    endTime: { required: true, type: Number }
}, {versionKey: false});

const classModel = mongoose.model<classInterface & Document>(config.classCollectionName, classSchema, config.classCollectionName);

export default classModel;