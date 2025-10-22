import React, { useState } from "react";

//include images into your bundle

//create your first component
const Home = () => {
	let [tarea, setTarea] = useState("")
	let [lista, setLista] = useState([])

	const escribirTarea = (event) => {
		setTarea(event.target.value)
	}
	const agregar = (event) => {
		if (event.key === "Enter") {
			setLista([...lista, tarea])
			setTarea("")
		}

	}
	const eliminarTarea = (posicion) => {
		setLista(lista.filter((item, index) => index !== posicion))
	}

	return (
		<>
			<h1 className="big-title">todos</h1>
			<div className="text-center paper">
				<input className="ingreso-de-texto" type="text" placeholder="What needs to be done?" onChange={escribirTarea} value={tarea} onKeyDown={agregar} />
				<ul className="list-unstyled texto-ingresado">
					{lista.map((item, index) => (<li key={index}>{item}<span onClick={() => eliminarTarea(index)}> ❌</span></li>))}

				</ul>
				<p className="counter">{lista.length} items left</p>
			</div>
		</>

	);
};

export default Home;