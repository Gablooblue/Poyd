export const types = {
	PRESCRIPTIONS_FETCH_REQUESTED: 'DOCTOR/PRESCRIPTIONS_FETCH_REQUESTED',
	PRESCRIPTIONS_FETCH_SUCCEEDED: 'DOCTOR/PRESCRIPTIONS_FETCH_SUCCEEDED',
	PRESCRIPTIONS_FETCH_FAILED: 'DOCTOR/PRESCRIPTIONS_FETCH_FAILED'
};


export const actions = {
	fetchPrescriptions: (doctorId) => ({type: types.PRESCRIPTIONS_FETCH_REQUESTED, doctorId}),
	fetchPrescriptionsSucceeded: (prescriptions) => ({type: types.PRESCRIPTIONS_FETCH_SUCCEEDED, prescriptions}),
	fetchPrescriptionsFailed: (error) => ({type: types.PRESCRIPTIONS_FETCH_FAILED, error}),
};




