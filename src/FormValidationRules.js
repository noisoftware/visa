export default function validate(values,callback,step) {
	let errors = {};
	console.log(step);
	if(callback === "order"){
		if(step === 1){
			//travelling date validations
			if (!values.travelling_date) {
				errors.travelling_date = 'Travelling date is required.';
			}else if(values.travelling_date){
				let travel_date = new Date(values.travelling_date);
				let curdate = new Date();
				let days = ( curdate.getTime() - travel_date.getTime() ) / (1000*3600*24)
				if(days < 30){
					errors.travelling_date = 'Visa application is not possible in a date within a month';
				} 
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
			}else if(values.dob){
				let dob = new Date(values.dob);
				let curdate = new Date();
				if(dob >= curdate){
					errors.dob = 'Invalid Date of birth.';
				}else{
					let days = (curdate.getTime()-dob.getTime())/(1000*3600*24)
					if(days < 180){
						errors.dob = 'You are not allowed. Your age must be more than 180 days';
					}
				}
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
		}else if(step === 2){
		
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
			}else if(values.passport_issue_date){
				let issue_date = new Date(values.passport_issue_date);
				let curdate = new Date();
				if(issue_date >= curdate){
					errors.passport_issue_date = 'Invalid issue date.';
				}
			}
			//passport_expiry_date validations
			if (!values.passport_expiry_date) {
				errors.passport_expiry_date = 'Passport expiry date is required.';
			}else if(values.passport_expiry_date){
				let issue_date = new Date(values.passport_issue_date);
				let expiry_date = new Date(values.passport_expiry_date);
				let travel_date = new Date(values.travelling_date);
				let curdate = new Date();
				if(expiry_date < issue_date){
					errors.passport_expiry_date = 'Invalid expiry date.';
				}else{
					if(expiry_date <= curdate){
						errors.passport_expiry_date = 'Passport Expired.';
					}else if(travel_date >= expiry_date){
						errors.passport_expiry_date = 'Passport will be expired soon.';
					}
				}
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
			}else if(values.depature_date){
				let travel_date = new Date(values.depature_date);
				let curdate = new Date();
				let days = ( curdate.getTime() - travel_date.getTime() ) / (1000*3600*24)
				if(days < 30){
					errors.depature_date = 'Visa application is not possible for a date within a month';
				} 
			}
		}
	}else if(callback === "register"){
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