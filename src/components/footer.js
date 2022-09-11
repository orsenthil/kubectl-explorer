import React from 'react';
import PropTypes from 'prop-types';
import github from 'assets/images/github.svg';
import githubGreen from 'assets/images/github-green.svg';

const Footer = props => (
  <footer className="footer">
    <div className="logo">
      <a href="https://github.com/orsenthil/eksctl-explorer" rel="noopener noreferrer" target="_blank">
        {props.dark ? (
          <img src={githubGreen} alt="Github Logo" className="logo--github" />
        ) : (
          <img src={github} alt="Github Logo" className="logo--github" />
        )}
      </a>
    </div>
    <p className="footer__copyright dark-white">
      Made with <span>❤</span> by{' '}
      <a href="https://senthil.learntosolveit.com" target="_blank" rel="noopener noreferrer">
    Senthil Kumaran. See also <span></span>{' '}
      </a>
      <a href="https://eksctl-explorer.learntosolveit.com/" target="_blank" rel="noopener noreferrer" className="footer__link">kubectl-explorer,</a>
      <a href="https://eksctl-explorer.learntosolveit.com/" target="_blank" rel="noopener noreferrer" className="footer__link">aws-explorer</a>
    </p>

    <p className="footer__copyright dark-white">
      Thanks to parent projects {' '}
      <a href="https://gitexplorer.com/" target="_blank" rel="noopener noreferrer"> GitExplorer</a>, 
      <a href="https://objectexplorer.netlify.app/" target="_blank" rel="noopener noreferrer"> Javascript Object Explorer.</a>
    </p>

  </footer>
);

Footer.propTypes = {
  dark: PropTypes.bool
};

export { Footer };
