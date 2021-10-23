export class URL {
    constructor (title,description,url) {
        this.title = title ? title : "";
        this.description = description ? description : "";
        this.url = url ? url : "";
        this.titleValidation = "";
        this.urlValidation = "";
    }

    validate() {
        if(this.title.length) {
            if(this.title.length<4 || this.title.length>19) this.titleValidation = "Title should have atleast 5 Characters and atmost 20 Characters";
            else this.titleValidation = "";
        }
        if(this.url.length) {
            this.urlValidation = this.isValidURL(this.url) ?  "" : "Enter a valid URL";
        }
    }

    isValidURL(string) {
        var res = string.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
        return (res !== null)
    }

    setTitle(title) { this.title = title }
    setUrl(url){ this.url = url }
    setDescription(desc){ this.description = desc }

}