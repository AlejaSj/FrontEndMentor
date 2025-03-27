import "./../App.css";

function Card(props) {

  return (
    <div className={`${props.theme? "bg-white text-[#2f364b]" : " bg-[#2f364b] text-[#d6e2f5]"} rounded-xl shadow-xl h-44 p-4  flex flex-col justify-between`}>
      <div className="flex gap-3">
        <div>
          <img src={props.logo} alt="" className="card-img" />
        </div>
        <div>
          <h2 className="font-bold">{props.titulo}</h2>
          <p>{props.description}</p>
        </div>
      </div>
      <div className="flex  justify-between items-center">
        <button onClick={props.onRemove} className="border-1 focus:border-red-500 hover:bg-[#f25c54] hover:text-white p-3 font-bold py-1 rounded-3xl border-[#545969]">
          Remove
        </button>
        <div>
        <label className="switch">
        <input
          type="checkbox"
          checked={props.activo}
          onChange={props.onToggle}
        />
        <span className="slider"></span>
      </label>
        </div>
      </div>
    </div>
  );
}

export default Card;
