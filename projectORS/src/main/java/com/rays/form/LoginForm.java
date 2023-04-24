package com.rays.form;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

import com.rays.common.BaseForm;

/**
 * Contains login form elements and their declarative input validations.
 */

public class LoginForm extends BaseForm {

	@NotEmpty(message= "please enter loginId")
	@Email
	private String loginId;

	@NotEmpty(message= "please enter password")
	private String password;

	public String getLoginId() {
		return loginId;
	}

	public void setLoginId(String loginId) {
		this.loginId = loginId;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

}
