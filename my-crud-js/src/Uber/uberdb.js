let uberusers = [
    {
        id : '101' , 
        name : 'raj' , 
        pick : 'kothrud' , 
        drop : 'karvenagar' , 
        dist : 4 ,  
        cab : 'auto' , 
        fare : 450 
    } , 
     {
        id : '102' , 
        name : 'tina' , 
        pick : 'warje' , 
        drop : 'baner' , 
        dist : 8 ,  
        cab : 'mini' , 
        fare : 700 
    }
]

export const showAllUberUsers = () => uberusers ; 

export const deleteUberByID = (id) => {
    const newData = uberusers.filter((u)=> u.id != id )
    uberusers = newData ; 
} 

export const addUberUser = (usr) => {
    const sameId = uberusers.find((s)=> s.id == usr.id) ; 
   if (sameId) {
    alert("ID Already Exist")
   } else {
     uberusers = [...uberusers , usr]
   }
} 

export const updateUberByID = (id,usr) => {
 
    const newData = uberusers.filter((u)=> u.id != id )

    uberusers = [...newData , usr]
        
}