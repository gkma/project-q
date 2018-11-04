/**
 * ************************************
 *
 * @module  controllers/addQuestionDataToDb.ts
 * @author Team Quail
 * @date 
 * @description middleware to create question entries in the db
 *
 * ************************************
 */

import { Request, Response, NextFunction } from 'express';
// import db and db functionality from modular files to access db methods
import db from '../../db';

const QuestionDatabase: any = {};

QuestionDatabase.insertData = (req: Request, _: Response, next: NextFunction) => {
  // db.users accesses methods defined in company controller
  db.questions.add(req.body)
  .then(() => {
    next();
  })
  .catch((error: any) => {
    console.log('ERROR AT INSERT DATA IN addQuestionToDb', error);
  });
  
}

export default QuestionDatabase;