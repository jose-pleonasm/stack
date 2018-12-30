import { connect } from 'react-redux';
import { GeneralLayout } from './GeneralLayout';

const mapStateToProps = (state) => ({
	articles: state.articles,
});

export const GeneralLayoutContainer = connect(mapStateToProps)(GeneralLayout);
