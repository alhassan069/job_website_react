import { ADD_JOB, APPLY_JOB, WHO_APPLIED } from "./actionTypes";

export const addJob = (payload) => ({
  type: ADD_JOB,
  payload,
});

export const applyJob = (payload) => ({
  type: APPLY_JOB,
  payload,
});

export const whoApplied = (payload) => ({
  type: WHO_APPLIED,
  payload,
});
