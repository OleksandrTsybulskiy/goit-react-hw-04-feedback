import PropTypes from 'prop-types';
import { Container } from './Container.styled';

export const SectionContainer = ({ title, children }) => {
    return (
      <Container>
        <h1>{title}</h1>
        {children}
      </Container>
    );
  };

SectionContainer.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node
}