import List from "../List/List";

export default function Profile(){
    const myinfo = {
        name: "Ivan Matkovic",
        location: "ZG",
        Age: "20",
        colors: [{id: 1, name: "red"},
        {id: 2, name: "green"},
        {id: 3, name: "blue"},],
    }

    return <>
        <h1>Profile</h1>
        <p>Name: {myinfo.name} </p>
        <p>Loaction: {myinfo.location} </p>
        <p>Age: {myinfo.Age} </p>
        <h2>Favourite colors: </h2>
        <List colors={myinfo.colors}/>
    </>;
}