export const types = {
	CUSTOMERS_FETCH_REQUESTED: 'DOCTOR/CUSTOMERS_FETCH_REQUESTED',
	CUSTOMERS_FETCH_SUCCEEDED: 'DOCTOR/CUSTOMERS_FETCH_SUCCEEDED',
	CUSTOMERS_FETCH_FAILED: 'DOCTOR/CUSTOMERS_FETCH_FAILED',

	MEDICINES_FETCH_REQUESTED: 'DOCTOR/MEDICINES_FETCH_REQUESTED',
	MEDICINES_FETCH_SUCCEEDED: 'DOCTOR/MEDICINES_FETCH_SUCCEEDED',
	MEDICINES_FETCH_FAILED: 'DOCTOR/MEDICINES_FETCH_FAILED',

	PRESCRIPTION_CREATE_REQUESTED: 'DOCTOR/PRESCRIPTION_CREATE_REQUESTED',
	PRESCRIPTION_CREATE_SUCCEEDED: 'DOCTOR/PRESCRIPTION_CREATE_SUCCEEDED',
	PRESCRIPTION_CREATE_FAILED: 'DOCTOR/PRESCRIPTION_CREATE_FAILED'
};


export const actions = {
	fetchCustomers: () => ({type: types.CUSTOMERS_FETCH_REQUESTED}),
	fetchCustomersSucceeded: (customers) => ({type: types.CUSTOMERS_FETCH_SUCCEEDED, customers}),
	fetchCustomersFailed: (error) => ({type: types.CUSTOMERS_FETCH_FAILED, error}),

	fetchMedicines: () => ({type: types.MEDICINES_FETCH_REQUESTED}),
	fetchMedicinesSucceeded: (medicines) => ({type: types.MEDICINES_FETCH_SUCCEEDED, medicines}),
	fetchMedicinesFailed: (error) => ({type: types.MEDICINES_FETCH_FAILED, error}),
  
	prescriptionCreate: () => ({type: types.PRESCRIPTION_CREATE_REQUESTED}),
	prescriptionCreateSucceeded: (medicines) => ({type: types.PRESCRIPTION_CREATE_SUCCEEDED, medicines}),
	prescriptionCreateFailed: (error) => ({type: types.PRESCRIPTION_CREATE_FAILED, error}),
};




