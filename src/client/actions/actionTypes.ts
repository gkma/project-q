/**
 * @module actionTypes.ts
 * @description Action Type Constants
 */

enum ActionTypes {
  // Form Actions - SYNC
  UPDATE_FIELD = 'UPDATE_FIELD',
  FETCH_FORM_FAILURE = 'FETCH_FORM_FAILURE',

  // Form Actions - ASYNC
  FETCH_FORM_REQUEST = 'FETCH_FORM_REQUEST',
  FETCH_FORM_SUCCESS = 'FETCH_FORM_SUCCESS',

  // User Actions
  ADD_ISSUE = 'ADD_ISSUE',
  REMOVE_ISSUE = 'REMOVE_ISSUE',
  CLEAR_ISSUES = 'CLEAR_ISSUES',
  UPDATE_ISSUE_POSITION = 'UPDATE_ISSUE_POSITION',
  UPDATE_ISSUES_SELECTED = 'UPDATE_ISSUES_SELECTED',
  PREV_PAGE = 'PREV_PAGE',

  FETCH_AUTH_REQUEST = 'FETCH_AUTH_REQUEST',
  FETCH_AUTH_SUCCESS = 'FETCH_AUTH_SUCCESS', // User authorization after cookie/session check
  // FETCH_AUTH_FAILURE = 'FETCH_AUTH_FAILURE',

  FETCH_LOGOUT_SUCCESS = 'FETCH_LOGOUT_SUCCESS', // User authorization after logout
  // FETCH_LOGOUT_FAILURE = 'FETCH_LOGOUT_FAILURE',

  FETCH_SUBMIT_ISSUES_REQUEST = 'FETCH_SUBMIT_ISSUES_REQUEST',
  FETCH_SUBMIT_ISSUES_SUCCESS = 'FETCH_SUBMIT_ISSUES_SUCCESS',
  // FETCH_SUBMIT_ISSUES_FAILURE = 'FETCH_SUBMIT_ISSUES_FAILURE',

  FETCH_SUBMIT_SURVEY_REQUEST = 'FETCH_SUBMIT_SURVEY_REQUEST',
  FETCH_SUBMIT_SURVEY_SUCCESS = 'FETCH_SUBMIT_SURVEY_SUCCESS',
  // FETCH_SUBMIT_SURVEY_FAILURE = 'FETCH_SUBMIT_SURVEY_FAILURE',

  // Issue Actions
  FETCH_ISSUES_REQUEST = 'FETCH_ISSUES_REQUEST',
  FETCH_ISSUES_SUCCESS = 'FETCH_ISSUES_SUCCESS',
  // FETCH_ISSUES_FAILURE = 'FETCH_ISSUES_FAILURE',

  // Survey Question Actions
  ANSWER_QUESTION = 'ANSWER_QUESTION',

  // Company Selection Actions
  FETCH_COMPANY_LIST = 'FETCH_COMPANY_LIST',
  SORT_COMPANY_LIST = 'SORT_COMPANY_LIST',
  SELECT_COMPANY = 'SELECT_COMPANY',
  GET_USER_ISSUES = 'GET_USER_ISSUES',
  ADD_COMPANY_SCORE = 'ADD_COMPANY_SCORE',
  MERGE_ISSUE_SCORES = 'MERGE_ISSUE_SCORES',
  GET_COMPANY_INFO = 'GET_COMPANY_INFO'
}

export default ActionTypes;
