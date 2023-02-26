import React from 'react';
import Button from '../Button';
import "./styles.css";
import "./responsive.css";

import linkIcon from "./../../images/icons/link-2.png"

function RepositoryCard({title, description, url, pageUrl}) {
	return (
		<div className="repository-card">
			<div className="repository-name">
				<span>{title && title.replaceAll('-', ' ')}</span>
			</div>

			<div className="repository-description">
				<p>{description && description}</p>
			</div>

			<div className="repository-footer">
        <Button
        title="Ver Repositório"
        url={url}

        />

        {
        pageUrl &&
        <a className="view-project" href={pageUrl} target="_blank">
          <img src={linkIcon} alt="Icone para visualizar o projeto no ar." />
        </a>
        }

			</div>
		</div>
	);
}

export default RepositoryCard;