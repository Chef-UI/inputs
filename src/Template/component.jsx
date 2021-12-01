import React from 'react';
import PropTypes from 'prop-types';

// STYLES
import './style.scss';

const Template = (props) => {
	const { subtitle } = props;

	const renderSubtitle = () => 'Template component is cool!';

	return (
		<div className="Template">
			<p className="Template__title">Template component</p>
			<p className="Template__subtitle">{subtitle && renderSubtitle()}</p>
		</div>
	);
};

Template.propTypes = {
	subtitle: PropTypes.bool,
};

export default Template;
