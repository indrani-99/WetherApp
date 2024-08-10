import { useRef, useState } from "react";
import axios from 'axios'
function Whether(){
const [dataTemp, setDataTemp]=useState(null);
const [foreCastData, setForecastData]=useState(null);

const city=useRef();
let api_key='703094c982d25396a558356b9add8199&units=metric';
    const handleSearch=async ()=>{
        try{
            let cityData=await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city.current.value}&appid=${api_key}`);
            let foreCast=await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city.current.value}&appid=${api_key}`);
            if(cityData.status==200)
                setDataTemp(cityData.data);
            if(foreCast.status==200)
                setForecastData(foreCast.data);
        }
        catch(err)
        {
            console.log(err);
        }
    }
    return <>
        <div style={{backgroundImage: `url('/image/one.jpg')`, width:"100vw",height:"100vh",backgroundSize: 'cover', boxSizing:"border-box",
                    color: 'white', 
                    textAlign: 'center', 
                    margin:'-8px', 
                    padding: '0px', 
                    backgroundPosition: 'center',
                    overflow: 'hidden' ,
                   
                   }}>
                    <div style={{margin:"auto",marginTop:"100px", width:"30%",  height:"40px", backgroundColor:"white", display:"flex", justifyContent:"space-between", boxShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px',borderRadius:"10px"}}>
                        <input type="text" ref={city} placeholder="Search by city" style={{border:"0px",color:"blue",width:"auto",fontWeight:"bold",fontSize:"15px", fontFamily:"monospace",padding:"10px", borderRadius:"10px",outline: "none"}} />
                        <button onClick={handleSearch} style={{padding:'10px 15px', border:"0px",color:"rgb(4, 46, 96)",fontFamily:"monospace", fontWeight:"bold", fontSize:"15px",backgroundColor:"rgb(253, 198, 152)",  borderRadius:"10px"}}>Search</button>
                    </div>

                    {dataTemp && <div style={{
                        width:"60%",margin:"auto", display:"flex",marginTop:"50px", justifyContent:"space-around", alignItems:"center"}}>
                    <div style={{
                        width:"30%",
                        fontFamily:"monospace",
                        display:"flex",
                        justifyContent:"space-between",
                        alignItems:"center"
                    }}>
                        <h1 style={{fontSize:"30px"}}>{dataTemp.name}</h1>
                        <h1 style={{fontSize:"50px"}}>{Math.floor(dataTemp.main.temp)}&deg;C</h1>
                    </div>
                    <div style={{textAlign:"left", fontFamily:"monospace"}}>
                        <h4>Feels like {dataTemp.main.feels_like}</h4>
                        <h4>Minimum temperature {dataTemp.main.temp_min}</h4>
                        <h4>Maximum temperature {dataTemp.main.temp_max}</h4></div></div> }

                        {foreCastData && <div style={{ marginTop: "50px" }}>
                    <div style={{
                        display: "flex",
                        justifyContent: "space-around",
                        marginTop: "20px",
                        fontFamily: "monospace"
                    }}>
                        {foreCastData.list.filter(item => item.dt_txt.includes('00:00:00')).map((element,index)=>(
                            <div key={index} style={{ textAlign: "center" }}>
                                <p>{new Date(element.dt_txt).toLocaleDateString()}</p>
                                <p>{Math.floor(element.main.temp)}&deg;C</p>
                            </div>
                        ))}
                    </div>
                </div>}
        </div>
    </>
}

export default Whether;