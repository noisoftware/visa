export default function validate(values) {
	let errors = {};
	if (!values.firstname) {
		errors.firstname = 'First name is required';
	}else if(values.firstname.length < 3){
		errors.firstname = 'Atleast 3 characters required.';
	}else if(values.firstname.length > 32){
		errors.firstname = 'Atmost 32 characters allowed.';
	}
	if (!values.lastname) {
		errors.lastname = 'Last name is required';
	}else if(values.lastname.length < 3){
		errors.lastname = 'Atleast 3 characters required.';
	}else if(values.lastname.length > 32){
		errors.lastname = 'Atmost 32 characters allowed.';
	}
	if (!values.accountType) {
		errors.accountType = 'Please select an Account Type';
	}
	
	if (!values.email) {
		errors.email = 'Email address is required';
	} else if (!/\S+@\S+\.\S+/.test(values.email)) {
		errors.email = 'Email address is invalid';
	}
	if (!values.password) {
		errors.password = 'Password is required';
	} else if (values.password.length < 6) {
		errors.password = 'Password must be 6 or more characters';
	}
	if (!values.confirmPassword) {
		errors.confirmPassword = 'Password is required';
	} else if (values.password !== values.confirmPassword) {
		errors.confirmPassword = 'Password and confirm password should be same.';
	}
	return errors;
};