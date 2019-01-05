import { connect } from 'react-redux';
import { Root } from './Root';

const mapStateToProps = (state) => ({
	lang: state.config.lang,
});

export const RootContainer = connect(mapStateToProps)(Root);
