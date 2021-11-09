import "./Sidebar.css";
import artikles from "../data/artikles.json";
import pdf from "../opisan/opi.pdf";
function Sidebar() {
return(
    <div className="Sidebar">
        <nav>
            <ul>
                {artikles.map(item=>
                    <li>
                        {/* <a target='_blank' href={item.href}>{item.title}</a> */}
                        <a rel="noreferrer"  target='_blank' href={item.href}>{item.title}</a>
                        <a rel="noreferrer"  target='_blank' href={item.url}> Видео</a>
                    </li>)}
            </ul>
        </nav>
        <a  rel="noreferrer"  target='_blank' href={pdf}>Открыть описание</a>
    </div>
);
}

export default Sidebar;