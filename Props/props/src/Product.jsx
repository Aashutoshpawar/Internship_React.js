import "./Product.css";

export default function Product(props){
    return(
        <div className="Product">
            <h3>{props.name} </h3>
            <p>{props.description}</p>
            <button>click here</button>
        </div>
    );
}
