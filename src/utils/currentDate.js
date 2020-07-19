export function getCurrentDate(separator=''){

    let newDate = new Date();
    let date = newDate.getDate();
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let month = months[newDate.getMonth()];
    let year = newDate.getFullYear();
    
    return `${month} ${date}, ${year}`
}