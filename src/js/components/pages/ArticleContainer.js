import { connect } from 'react-redux';
import { Article } from './Article';

const mapStateToProps = (state) => ({
	articles: state.articles,
});

export const ArticleContainer = connect(mapStateToProps)(Article);
