import { useState, useEffect } from 'react';

const useForm = (callback, validate, name, step, fldOnChange) => {

	const [values, setValues] = useState({});
	const [errors, setErrors] = useState({});
	const [isSubmitting, setIsSubmitting] = useState(false);

	useEffect(() => {
		//console.log('form_load');
		if (Object.keys(errors).length === 0 && isSubmitting) {
			//console.log(callback);
			callback();
		}
		console.log(errors);
	}, [errors]);

	const handleSubmit = (event) => {
		if (event) event.preventDefault();		
		setErrors(validate(values,name,step));
		setIsSubmitting(true);
	};

	const handleChange = (event) => {
		event.persist();
		if(event.target.type === 'checkbox'){
			//console.log(event.target.checked);
			setValues(values => ({ ...values, [event.target.name]: event.target.checked }));
		}else{			
			setValues(values => ({ ...values, [event.target.name]: event.target.value }));
			
			if(event.target.name === 'travel_purpose'){
				fldOnChange(event.target.value);
			}
		}
	};

	return {
		handleChange,
		handleSubmit,
		values,
		errors,
	}
};

export default useForm;