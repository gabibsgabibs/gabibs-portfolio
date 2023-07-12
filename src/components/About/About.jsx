import React from "react";
import perfil from "./Assets/perfil.png";

function About() {
	return (
		<main className="bg-midblue flex flex-col place-items-center">
				<img src={perfil} alt="Fotografia de Gabriella." className="rounded-full w-3/5 border-white border-[8px] my-5"/>
				<section className="flex flex-col place-items-center w-11/12 px-3">
					<h2 className="text-lightblue text-3xl font-semibold">SOBRE MIM</h2>
					<p className="text-white my-5 text-center">
						Oi! Eu sou a Gabi! 
            {/* Uma <i>belorizontina</i> com grande apreço pela
						culinária mineira, em especial um bom pão de queijo. Além disso, sou
						apaixonada por cachorros, fotografia, viagens, e <b>programação</b>.{" "} */}
						<br />
						<br />
						Minha trajetória no mundo <i><b>tech</b></i> começou cedo, quando tive meu
						primeiro contato com <b>programação</b> no ensino médio. Posteriormente,
						optei por seguir um outro interesse e me graduei em Arquitetura, mas
						a paixão pela <b>tecnologia</b> sempre esteve presente em minha vida. 
						<br />
						<br />
						Atualmente, encontro-me em um momento de <b>transição de carreira</b>, me
						dedicando de corpo e alma aos estudos, com o objetivo de retomar minha
						carreira na área da tecnologia. É incrível ver como os códigos
						ganham vida e transformam ideias em soluções práticas e inovadoras.
						Estou animada com a minha <b>jornada</b> de volta e mal posso
						esperar para ver onde essa paixão irá me levar!
					</p>
				</section>
        <p
				className="border-white border-b-[2px] text-center text-darkblue place-self-center p-2 mb-1"
				id="curriculum"
			>
				⇣ scroll down ⇣
			</p>
		</main>
	);
}

export default About;
