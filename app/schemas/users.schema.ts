export class User {
  constructor(      
    public UserId: number,
    public EmployeeId: number,
    public email: string,
    public password: string,
    public FirstName: string,
    public LastName: string,
    public PrimaryNumber: number,
    public DOB: Date,
    public DOJ: Date,
    public SkypeId: string,
    public Experience: number,
    public MiddleName?: string,
    public SecondaryEmailId?: string,
    public SecondaryNumber?: number,
    public HighestQualification?: string,
    public isAvailable?: boolean
    ) { }
}

export class LoginUser {
  constructor(
    public email: string,
    public password: string
    ) { }
}