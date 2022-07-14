 class ResponseModel {
    message = "";
    data ;

    constructor (message="", data=""){
        this.message = message;
        this.data = data;
    }
}

exports = {ResponseModel};