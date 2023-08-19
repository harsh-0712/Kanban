



const helper=(tickets,users,property,order)=>{
    var map=new Map()
    var usr=new Map()
    var pri=new Map([[4,'Urgent'],[3,'High'],[2,'Medium'],[1,'Low'],[0,'No Priority']])
    if(property==='user')
    property='userId'
    for(let i=0;i<users.length;++i)
    usr.set(users[i].id,{name:users[i].name,available:users[i].available})
    for(let i=0;i<tickets.length;++i)
    {
        tickets[i].name=usr.get(tickets[i].userId).name;
        tickets[i].available=usr.get(tickets[i].userId).available;
        tickets[i].priorityName=pri.get(tickets[i].priority)
    }
    for(let i=0;i<tickets.length;++i)
    {
        if(map.has(tickets[i][property]))
        map.set(tickets[i][property],map.get(tickets[i][property]).concat([tickets[i]]))
        else 
        map.set(tickets[i][property],[tickets[i]])
    }
    let arr=[];
    map.forEach((value,key)=>{
        arr.push(value)
    })
    arr.sort((a,b)=>{
        return b[0][property]-a[0][property]
    })
    console.log(arr);
    for(let i=0;i<arr.length;++i)
    {
        console.log('Anoop Sharma' < 'Yogesh');
        arr[i].sort((a,b)=>{
            if(order==='priority')
            return b[order]-a[order]
            if(a[order]<b[order])
            return -1;
            if(a[order]>b[order])
            return 1;
            return 0;
        })
    }
    console.log(arr);
    return arr;
}


export default helper