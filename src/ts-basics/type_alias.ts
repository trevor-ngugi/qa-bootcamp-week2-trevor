type Employee={
    readonly id:number,
    name:string,
    retire:(date:Date)=> void
};

let employeee:Employee={
    id:1, 
    name:"trevor",
    retire:(date:Date)=>{
        console.log(date);
    }
};
