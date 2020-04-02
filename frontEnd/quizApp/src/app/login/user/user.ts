export interface User   {
    id: number,
    name: string,
    lastName: string,
    yearOfBirth: Date,
    email: string,
    password: string,
    educationLevel: number,
    image: string,
    cardID: number,
    points: number,
    createdAt: Date;
    updatedAt: Date;
}