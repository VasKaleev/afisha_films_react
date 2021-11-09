import "./Main.css";
import artikles from "../data/artikles.json";
//import Rating from 'material-ui-rating'
console.log(artikles);
function Main() {
    return(
        <div className="Main">
           {artikles.map(item=>
           <section>
             <h2>{item.title}</h2>
             <p><img className="leftimg" src={item.im} alt="Films"/>
             {item.body}</p>
             <div></div>
             <p id='raiting'>Рейтинг: {item.rayt}</p>
           {/*  <img  hspace="10" vspace="10" align="left"  alt="" src={item.img}>  */}
              
             
           </section>)}
        </div>
    );
}

export default Main;