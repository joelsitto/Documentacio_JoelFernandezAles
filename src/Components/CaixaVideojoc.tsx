import "./CaixaVideojoc.css";

/**
 * Type de prop amb tota la informació que necessita la caixa del videojoc per
 * ser creada.
 * @property title Correspón al titol del videojoc
 * @property preu Correspón al preu del videojoc
 * @property descripcio Correspón a la descripció del videojoc
 */
export type prop = {
    title:string,
    preu:number,
    descripcio:string
};

/**
 * Aquest component és un div caixa amb la informació sobre el videojoc
 * @param prop Aquest paràmetre contè la informació que necessita la caixa sobre el videojoc.
 * @constructor CaixaVideojoc
 */
function CaixaVideojoc(prop:prop){


    return(
        <div className={"CaixaVideojoc"}>
            <h2 className={"title"}>{prop.title}</h2>
            <p className={"preu"}>{prop.preu}</p>
            <p className={"descripcio"}>{prop.descripcio}</p>
        </div>
    )
}

export default CaixaVideojoc;