export class Book {
    id!: number;
    reference!: string;
    title!: string;
    releaseDate!: Date;
    author!: string;
    unitPrice!: number; 
    retrievedImage!: string;
    isAdded!: boolean;

   
    private _id: any;
  name: any;


    getid() {

        return this._id;
        
        }
        setnum(_id: number) {
        this._id = _id;
        }
    }
