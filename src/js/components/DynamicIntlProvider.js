import * as React from 'react';
import { addLocaleData, IntlProvider } from 'react-intl';

export class DynamicIntlProvider extends React.Component {
	static loadLocaleData(locale) {
		const localaDataReady = import(`react-intl/locale-data/${locale}`);
		const messagesReady = import(`../../i18n/${locale}/messages`);

		return Promise.all([localaDataReady, messagesReady]).then(([localeData, messages]) => ({
			localeData: localeData.default,
			messages: messages.default,
		}));
	}

	constructor(props) {
		super(props);
		this.state = {
			loading: false,
			messages: {
				...(props.messages || null),
			},
		};
	}

	async componentDidMount() {
		const { locale } = this.props;
		if (this.state.messages[locale]) {
			return;
		}

		this.setState({
			loading: true,
		});

		try {
			const { localeData, messages } = await DynamicIntlProvider.loadLocaleData(locale);
			addLocaleData(localeData);
			this.setState({
				loading: false,
				messages: {
					...this.state.messages,
					[locale]: messages,
				},
			});
		}
		catch (error) {
			this.setState({
				loading: false,
			});
			throw error;
		}
	}

	render() {
		const { locale, children } = this.props;
		const { loading } = this.state;
		const forceRender = Object.keys(this.state.messages).length;

		if (!this.state.messages[locale] && loading) {
			return null;
		}

		return (
			<IntlProvider key={forceRender} locale={locale} messages={this.state.messages[locale]}>
				{children}
			</IntlProvider>
		);
	}
}
