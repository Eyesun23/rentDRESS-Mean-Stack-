export class User {
  constructor (
    public firstName: string = "",
    public lastName: string = "",
    public email: string = '',
    public password: string = '',
    public confirmpw: string = '',
    public street: any = '',
    public unit: any = '',
    public city: string = '',
    public state: string = '',
  ){}
}
