import React from 'react';
import Button from '../Button';
import "./styles.css";
import "./responsive.css";

function RepositoryCard() {
	return (
		<div className="repository-card">
			<div className="repository-name">
				<span>Nome do repositório</span>
			</div>

			<div className="repository-description">
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Vivamus eget justo sed quam posuere consectetur ac quis odio. 
					Nullam imperdiet nisl sit amet lorem sollicitudin tristique.
					Nullam imperdiet nisl sit amet lorem sollicitudin tristique.
					Nullam imperdiet nisl sit amet lorem sollicitudin tristique.
					Nullam imperdiet nisl sit amet lorem sollicitudin tristique.
					Nullam imperdiet nisl sit amet lorem sollicitudin tristique.
				</p>
			</div>

			<Button
			title="Ver Repositório"
			url="google.com"
			/>
		</div>
	);
}

export default RepositoryCard;