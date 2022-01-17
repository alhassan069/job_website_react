import { ADD_JOB, APPLY_JOB, WHO_APPLIED } from "./actionTypes";

const init = {
    jobs: [{
            id: "sdafkljadsfweoiruew",
            company: "Facebook",
            title: "SDE I",
            salary: "25LPA",
            description: "SDE 1 wanted apply now",
            location: "Bangalore",
            type: "Office",
        },
        {
            id: "sdafkljasaddsfweoiruew",
            company: "Masai School",
            title: "Data Scientist",
            salary: "12LPA",
            description: "Data Scientist wanted apply now",
            location: "Bangalore",
            type: "Remote",
        },
        {
            id: "sdafkljadsfwfdsffdeoiruew",
            company: "Google",
            title: "SDE III",
            salary: "1234562344-4654623454 Rs",
            description: "SDE 3 wanted apply now",
            location: "London",
            type: "Remote",
        },
    ],
    appliedJobs: [],
    whoApplied: [],
};

export const jobReducer = (state = init, { type, payload }) => {
    switch (type) {
        case ADD_JOB:
            return {...state, jobs: [...state.jobs, payload] };
        case APPLY_JOB:
            return {...state, appliedJobs: [...state.appliedJobs, payload] };
        case WHO_APPLIED:
            return {...state, whoApplied: [...state.whoApplied, payload] };
        default:
            return state;
    }
};