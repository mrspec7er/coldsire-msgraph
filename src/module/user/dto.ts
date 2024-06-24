export interface UserType {
  accountEnabled: boolean;
  city: string;
  country: string;
  department: string;
  displayName: string;
  givenName: string;
  jobTitle: string;
  mail: string;
  mailNickname: string;
  passwordPolicies: string;
  passwordProfile: {
    password: string;
    forceChangePasswordNextSignIn: boolean;
  };
  officeLocation: string;
  postalCode: string;
  preferredLanguage: string;
  state: string;
  streetAddress: string;
  surname: string;
  mobilePhone: string;
  usageLocation: string;
  userPrincipalName: string;
}
