/**
 * ************************************
 *
 * @module  controllers/question.ts
 * @author Team Quail
 * @date 
 * @description methods to modify/create/access questions data within the database
 *
 * ************************************
 */

// import pg-promise types and sql statements 
import { IDatabase } from 'pg-promise';
// import issues interface
// import { Issues } from './index';
// import unique user id creation library
import { v4 } from 'uuid';

export class DatabaseRepository {
  constructor (db: any) {
    this.db = db;
  }

  private db: IDatabase<any>; 
  
  // add questions
  async addQuestions(questionData: any[]) {
    // iterate through all questions being submitted to the db
    for(let i=0; i < questionData.length; i++) {

      // at each question, insert into the db...no need to return here, just a submission route
      this.db.none('INSERT INTO questions (id, "issueId", question, bias) VALUES ($1, $2, $3, $4);', 
      [v4(), questionData[i].issueId, questionData[i].question, questionData[i].Bias])
      .catch((error: any) => {
        console.log('ERROR AT ADD FUNCTION IN QUESTIONSTORE.TS', error);
      })
    }
  };

  // deliver questions
  // REFACTOR **************maybe a dead method, not sure we need a blanket list of the questions anywhere**********
  getQuestions(){
    return this.db.any('SELECT * FROM questions;')
  }

  // deliver questions related to an issues
  async getIssueQuestions(issues: any[]) {
    // question object stores the questions from each query
    let questions: any = {};
    // iterate through the user selected issues to make queries for each one
    for (let i = 0; i < issues.length; i += 1) {
      // hold the function with await, to stop teh thread while each issue queries
      await this.db.any('SELECT * FROM questions WHERE "issueId" = $1', [issues[i]])
      .then((data: any) => {
        // data comes back as an array of question objects, use each object to shape the question object for the front end
        data.forEach((question: any)=> {
          questions[question.id] = {};
          questions[question.id].issueId = question.issueId;
          questions[question.id].questionText = question.question;
          questions[question.id].position = question.bias;
          // REFACTOR once we can complete the survey we should query for user answers
          questions[question.id].agree = null;
        })
      })
      .catch((error: any) => {
        console.log('ERROR AT getIssueQuestions IN data.ts', error);
      })
    }
    // after the iterations return teh question object
    return questions;
  }

  // insert issue data, data submission
  async addIssues(issueData: any[]) {
      for (let i = 0; i < issueData.length; i += 1) {
        this.db.none('INSERT INTO issues (id, issue, description) VALUES ($1, $2, $3)', [v4(), issueData[i].issue, issueData[i].description])
        .catch((error: any) => {
          console.log('ERROR AT addIssues IN additionalDataMethods.ts', error);
        })
      }
  }

}