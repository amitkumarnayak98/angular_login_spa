export const chamberNameConfigs = {
  type: 'name',
  minLength: '', // TODO: TBD
  maxLength: '', // TODO: TBD
  pattern: /(?=^[a-zA-Z])(?=^[\w\s-]+$)/,
  patternMismatchMessage: 'One or more characters entered are not allowed.',
  // eslint-disable-next-line no-empty-character-class
  trailingSpacePattern: /[ ]+$/,
  trailingSpacesErrorMessg: 'No trailing spaces allowed.',
};

export interface ValidationData {
  /**
   * hasError
   */
  hasError: boolean;

  /**
   * validationMessage
   */
  validationMessage: string;
}

export interface FormArrayDto {
  label?: string;
  placeholder?: string;
  formControlName?: string;
  controls?: string;
  type?: string;
  error?: string;
}

export interface SignUpClickEventDto {
  disableBtnValue?: boolean;
  controlValue: LoginClickEventDto;
  actionBtnChanged?: string;
}

export interface LoginClickEventDto {
  email: string;
  password: string;
  userName?: string;
  name?: string;
}

export interface ColumnSchemaDto {
  key: string;
  title: string;
  type?: string;
}

export const VALID = 'VALID';
export const INVALID = 'INVALID';
export const FILED_REQUIRED = '* required';
// export const userListDisplayedColumns = [
//   {
//     key:'email',
//     title:'',
//     type:'',
//   },
//   {
//     key:'userName',
//     title:'',
//     type:'',
//   },
//   {
//     key:'name',
//     title:'',
//     type:'',
//   },
//   {
//     key:'password',
//     title:'',
//     type:'',
//   }
//   // 'email',
//   // 'userName',
//   // 'name',
//   // 'password',
// ];

export const PASSWORD_PATTERN_MISMATCH =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+,\-./:;<=>?@[\\\]^_`{|}~])[A-Za-z!@#$%^&*()_+,\-./:;<=>?@[\\\]^_`{|}~0-9]{8,}$/;

export const USERNAME_PATTERN_MISMATCH = /^[a-z]{5,}$/;

export const NAME_PATTERN_MISMATCH = /^[A-Za-z\s-']{1,50}$/;

export const EMAIL_PATTERN_MISMATCH =
  /^(?=.{1,256})(?=.{1,64}@.{1,255}$)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/;

export interface ValidationData {
  /**
   * hasError
   */
  hasError: boolean;

  /**
   * validationMessage
   */
  validationMessage: string;
}

export interface ProfileOptions {
  id: number;
  name: string;
}

export const profileMenuOptions = [
  {
    id: 1,
    name: 'Profile',
  },
  {
    id: 2,
    name: 'Logout',
  },
];

export const employeeHeadings = [
  'mobileNumber',
  'address',
  'city',
  'state',
  'country',
  'postalZipCode',
  'additionalInformation',
];

/** SignUp Form Controls Array */
export const signUpFormControls: Array<{
  label?: string;
  placeholder?: string;
  formControlName?: string;
  controls?: string;
  type?: string;
  error?: string;
  errorString?: string;
  isPtagNeeded?: boolean;
  pLabel?: string;
  styleValue?: string;
}> = [
  {
    label: 'Email',
    placeholder: 'email',
    formControlName: 'email',
    controls: 'email',
    type: 'email',
    error: 'emailError',
    errorString: 'Enter a vaild eamil',
    isPtagNeeded: false,
  },
  {
    label: 'Username',
    placeholder: 'username',
    formControlName: 'userName',
    controls: 'username',
    type: 'text',
    error: 'userNameError',
    isPtagNeeded: false,
  },
  {
    label: 'Name',
    placeholder: 'name',
    formControlName: 'name',
    controls: 'userName',
    type: 'text',
    error: 'nameError',
    isPtagNeeded: false,
  },
  {
    label: 'Password',
    placeholder: 'password',
    formControlName: 'password',
    controls: 'userName',
    type: 'password',
    error: 'passwordError',
    isPtagNeeded: false,
  },
];
