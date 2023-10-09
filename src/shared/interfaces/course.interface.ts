export interface ICourse {
    id?: number;
    name: string;
    description: string;
    instructorId: number;
    createdAt?: Date;
    updatedAt?: Date;
}
