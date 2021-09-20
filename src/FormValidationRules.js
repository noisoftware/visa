export default function validate(values,callback) {
	let errors = {};
	
	if(callback == "order"){
		
		//travelling date validations
		if (!values.travelling_date) {
			errors.travelling_date = 'Travelling date is required.';
		}
		if (!values.firstname) {
			errors.firstname = 'First name is required';
		}else if(!isNaN(values.firstname)){
			errors.firstname = 'First Name should be string type.';
		}else if(values.firstname.length < 3){
			errors.firstname = 'Atleast 3 characters required.';
		}else if(values.firstname.length > 32){
			errors.firstname = 'Atmost 32 characters allowed.';
		}
		if (!values.lastname) {
			errors.lastname = 'Last name is required';
		}else if(!isNaN(values.lastname)){
			errors.lastname = 'Last Name should be string type.';
		}else if(values.lastname.length < 3){
			errors.lastname = 'Atleast 3 characters required.';
		}else if(values.lastname.length > 32){
			errors.lastname = 'Atmost 32 characters allowed.';
		}
		
		
		//email validations
		if (!values.email) {
			errors.email = 'Email address is required';
		} else if (!/\S+@\S+\.\S+/.test(values.email)) {
			errors.email = 'Email address is invalid';
		}
		if (!values.confirm_email) {
			errors.confirm_email = 'Email address is required';
		} else if (!/\S+@\S+\.\S+/.test(values.confirm_email)) {
			errors.confirm_email = 'Email address is invalid';
		}else if(values.confirm_email !== values.email){
			errors.confirm_email = 'Emails are not matching';
		}
		
		
		//Dob validations
		if (!values.dob) {
			errors.dob = 'Date of birth is required.';
		}
		//Phone validations
		if (values.phone && values.phone.length < 10) {
			errors.phone = 'Atleast 10 digits required.';
		}else if(values.phone && values.phone.length > 10) {
			errors.phone = 'Atmost 10 digits allowed.';
		}else if(values.phone && isNaN(values.phone)){
			errors.phone = 'Phone number is not valid.';
		}
		//travel purpose validations
		if (!values.travel_purpose) {
			errors.travel_purpose = 'Travel purpose is required.';
		}
		//nationality validations
		if (!values.nationality) {
			errors.nationality = 'Nationality is required.';
		}
		
		//terms validations
		if (!values.term_cond) {
			errors.term_cond = 'Terms and conditions is not checked.';
		}
		//visa validations
		if (!values.visa_cond) {
			errors.visa_cond = 'Visa condition is not checked.';
		}
		
		//birth country validations
		if (!values.birth_country) {
			errors.birth_country = 'Birth Country is required.';
		}
		//gender validations
		if (!values.gender) {
			errors.gender = 'Gender is required.';
		}
		//passport_no validations
		if (!values.passport_no) {
			errors.passport_no = 'Passport No. is required.';
		}
		//passport issue country validations
		if (!values.passport_issue_country) {
			errors.passport_issue_country = 'Passport issue country is required.';
		}
		//passport_issue_date validations
		if (!values.passport_issue_date) {
			errors.passport_issue_date = 'Passport issue date is required.';
		}
		//passport_expiry_date validations
		if (!values.passport_expiry_date) {
			errors.passport_expiry_date = 'Passport expiry date is required.';
		}/*else if(Date.parse(values.passport_expiry_date) =< Date.parse(values.passport_issue_date)){
			errors.passport_expiry_date = 'Passport expiry date must be greater than passport issue date.';
		}*/
		//applicant_address validations
		if (!values.applicant_address) {
			errors.applicant_address = 'Address is required';
		}
		//applicant_city validations
		if (!values.applicant_city) {
			errors.applicant_city = 'City is required.';
		}
		//applicant_country validations
		if (!values.applicant_country) {
			errors.applicant_country = 'Country is required.';
		}
		//depature_date validations
		if (!values.depature_date) {
			errors.depature_date = 'Departure date is required.';
		}
	}else if(callback == "register"){
		if (!values.firstname) {
			errors.firstname = 'First name is required';
		}else if(!isNaN(values.firstname)){
			errors.firstname = 'First Name should be string type.';
		}else if(values.firstname.length < 3){
			errors.firstname = 'Atleast 3 characters required.';
		}else if(values.firstname.length > 32){
			errors.firstname = 'Atmost 32 characters allowed.';
		}
		if (!values.lastname) {
			errors.lastname = 'Last name is required';
		}else if(!isNaN(values.lastname)){
			errors.lastname = 'Last Name should be string type.';
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
		//password validations
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
	}
	
	return errors;
};