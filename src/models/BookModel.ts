import mongoose, { Schema, Document } from "mongoose";

export interface Book extends Document {
    id: number,
    name: string,
    auther: string,
    status: number,
    gener: string,
    limit_age : string,
  }
  
  const BookSchema: Schema = new Schema({
    id: { type: Number},
    name: { type: String, required: true },
    auther: { type: String, required: true },
    gener: { type: String, required: true },
    status: { type: Number},
    limit_age: { type: String, required: true, min: 0, max: 10},
    //   לבדוק -validate:{validator:(value:String)=>{return value.length >= 10;},message:'Phone Number Is Not Valid' ? message:'Phone Number Is Valid'} },
  });

  // Instance method
BookSchema.methods.getBookInfo = function() {
    return `Id: ${this.id}, Name: ${this.name}, Auther: ${this.auther}, Gener: ${this.gener}, Status: ${this.status}, Limit_Age: ${this.limit_age}`;
  
};

  export default mongoose.model<Book>('Book', BookSchema);

 