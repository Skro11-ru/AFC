import { useTranslation } from 'react-i18next';

const AboutPage = () => {
	const { t, i18n } = useTranslation('about');
	return <div>{t('aboutPage')}</div>;
};

export default AboutPage;
