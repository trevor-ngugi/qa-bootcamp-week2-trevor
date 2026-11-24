type User = {
    id:number,
    username:string,
    settings?:{
        notifications:boolean}
}

let user:User = {
    id:1,
    username:"trevor",
    settings:{
        notifications:true
    }
}

let user2:User = {
    id:2,
    username:"ngugi"}

let user3:User = {
    id:3,
    username:"gatonye",
    settings:{
        notifications:false
    }
}

function isNotified(user:User):boolean{
    return user.settings?.notifications ?? false;
}

console.log(isNotified(user));
console.log(isNotified(user2));
console.log(isNotified(user3));