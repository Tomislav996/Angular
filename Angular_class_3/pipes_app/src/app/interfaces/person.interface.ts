
export interface Person {
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    address: Address;
    telephoneNumber: string;
    position: string;
    salary: number;
    yearsOfService: number;
    performance: number;
    startDate: Date;
    
}


export interface Address {
    street: string,
    city: string,
    zipCode: string,
}