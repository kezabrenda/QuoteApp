export class Quote {
    showQuoted: boolean;
    showForm: boolean;
    constructor (
        public names:string,
        public quoted:string,
        public author:string,
        public upvote: number,
        public downvote: number,
        public uploadedDate: Date) {
            
        this.showQuoted=false;
        this.showForm=false;
    }
}
