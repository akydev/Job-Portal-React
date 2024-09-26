export interface IEducation {
  institutionName: string;
  startYear: string;
  endYear: string;
}

export interface IRegistration {
  type: string;
  name: string;
  email: string;
  password: string;
  bio: string;
  contactNumber: string;
  education: IEducation[];
  skills: string[];
}
