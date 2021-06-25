import React,{useState} from "react";
import SearchBox from "./components/SearchBox";
import SearchResults from "./components/SearchResults";
import "./styles.css";
import data from "../../data/users.json";


export default function Search(){
    const [top, settop] = useState(false);
    const [results, setresults] = useState([])
    const [usersData, setusersData] = useState(data);

    const handleSearchCloseClick = ()=>{
        settop(false);
        setresults([]);
    }
    const handleSearchClick = (search) =>{
        settop(true)
        if(usersData?.length){
            const filterData = usersData.filter((value)=>{
                return (
                    value.name.toLowerCase().includes(search) ||
                    value.username.toLowerCase().includes(search) ||
                    value.email.toLowerCase().includes(search)
                )
            })
            setresults(filterData);        
        }
    }

    return(
        <div className = {`search ${top?"search--top":"search--center"}`}>
            <SearchBox
                onSearch={handleSearchClick}
                onClose= {handleSearchCloseClick}
                searching = {top}/>
            <SearchResults results = {results} searching = {top}/>
        </div>
    )
}