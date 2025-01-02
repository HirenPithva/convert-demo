export class User{
    
    constructor(public emailId: string, public id: string, private _tokenId: string, private _expiresIn: Date){
        console.log(_expiresIn);
    }

    get Token(){
        if(this._tokenId == null || (new Date(this._expiresIn).getTime() - new Date().getTime()) < 0){
            return null;
        }
        return this._tokenId;
    }
}