import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";

//create your first component
const Home = () => {
	const datos = [
		{
			titulo: "Cultivo de cafe",
			descripcion: "Las plantaciones pueden hacerse completamente al descubierto, lo que facilita la organización de las operaciones de cultivo y aumenta la producción frutal...",
			img: "https://www.semana.com/resizer/9Cv6YV2SV9AP_jjhmk4_Q9eYTjk=/1200x646/filters:format(jpg):quality(50)/cloudfront-us-east-1.images.arcpublishing.com/semana/XKIUG2QPHRFV7L3EW57MMJ7YTM.jpeg",
			color: "info"

		},
		{
			titulo: "Cosecha y Post-cosecha",
			descripcion: "La recolección se realiza principalmente en forma manual y selectiva, recogiendo solo las cerezas de café maduras y evitando dañar las yemas de las ramas...",
			img: "https://visionagropecuaria.com.ve/wp-content/uploads/2022/06/Cultivo-Cafe-e1591014666867-600x452-1.jpg",
			color: "danger"

		},
		{
			titulo: "Tueste, Preparación y Consumo",
			descripcion: "Llegados a su destino, los granos son tostados, lo que desarrolla su aroma y les da su color oscuro. En algunos países, el tueste se hace...",
			img: "https://venezolanoenchile.com/wp-content/uploads/2018/12/hello-market-cafe-venezolano-chile.jpg",
			color: "info"

		},
	];
	return (
		<div className="container-fluid">
			<Navbar/>
			<div className="container my-5">
				<Jumbotron/>
				
				<div className="d-flex justify-content-center my-5">
					{datos.map((objeto,posicion)=>{
						return <Card titulo={objeto.titulo} descripcion={objeto.descripcion} img={objeto.img} color={objeto.color}/>
					})
					}
				</div>
			</div>
			<Footer/>
		</div>
	);
};

export default Home;
