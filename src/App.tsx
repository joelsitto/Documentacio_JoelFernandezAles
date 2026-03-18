
import './App.css'
import CaixaVideojoc from "./Components/CaixaVideojoc.tsx";
import {type JSX, useActionState, useState} from "react";

/**
 * Type per definir si s'ha executat correctament la creació del nou videojoc
 * @property success False si ha fallat i True si ha anat bé.
 */
export type ActionState = {
  success: boolean
};

/**
 * Aquesta és una funció que controla la creació de nous videojocs
 * @param videojocs Aquest paràmetre contindrà el llistat de videojocs guardats a un useState
 * @param setVideojocs Aquest paràmetre contindrà la funció necessària per a canviar el useState afegint un nou videojoc
 */
export function HandleForm(videojocs: JSX.Element[], setVideojocs: (array: JSX.Element[]) => void) {
  return async function(_prevState: ActionState, formdata: FormData): Promise<ActionState> {

    const nom = formdata.get("Nom");
    const preu = formdata.get("Preu");
    const desc = formdata.get("Descripcio");

    if (nom != null && preu != null && desc != null) {
      const nouvideojocs = [...videojocs,
        <CaixaVideojoc title={String(nom)} preu={Number(preu)} descripcio={String(desc)}/>
      ];
      setVideojocs(nouvideojocs);
      return { success: true };
    } else {
      return { success: false };
    }
  }
}

/**
 * Aquesta és la pàgina principal del projecte
 * @constructor App
 */
function App() {

  /**
   * Estat que emmagatzema una llista d'elements JSX (components CaixaVideojoc)
   */
  const [videojocs, setVideojocs] = useState<JSX.Element[]>([]);

  const [state, FormAction] = useActionState<ActionState,FormData>(HandleForm(videojocs,setVideojocs),{
    success:false
  })

  return (
    <>
      <div id={"LListatVideojocs"}>
        {state.success&&videojocs}
        </div>
      <form action={FormAction}>
        <label>Nom videojoc<input name={"Nom"} type={"text"}/></label>
        <label>Preu videojoc<input name={"Preu"} type={"number"} min={0} max={1000}/></label>
        <label>Descripció videojoc<textarea name={"Descripcio"}/></label>
        <button>Nou videojoc</button>
      </form>

    </>
  )
}

export default App
