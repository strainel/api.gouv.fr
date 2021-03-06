import React from 'react';

import Section from './section';
import { ButtonLink } from '../../uiComponents/button';

interface IProps {
  link: string;
}

const Support: React.FC<IProps> = ({ link }) => {
  return (
    <Section id="contact" title="Support">
      <>
        {link ? (
          <>
            {link.indexOf('@') > -1 ? (
              <>
                <p>Vous pouvez contacter le support de cette API par mail. .</p>
                <ButtonLink
                  href={`mailto:${link}?subject=Contact%20via%20api.gouv.fr`}
                  alt
                  large
                >
                  <i className="icon mail"></i> Envoyer un mail à {link}
                </ButtonLink>
              </>
            ) : (
              <>
                <p>
                  Vous pouvez contacter le support de cette API en utilisant un
                  formulaire.
                </p>
                <ButtonLink
                  href={link}
                  target="_blank"
                  rel="noopener"
                  alt
                  large
                >
                  <i className="icon linkify"></i> Accéder au formulaire de
                  contact
                </ButtonLink>
              </>
            )}
          </>
        ) : (
          <p>Le contact de cette API n'est pas disponible publiquement.</p>
        )}
      </>
    </Section>
  );
};

export default Support;
