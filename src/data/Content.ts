import { useTranslation } from "react-i18next";

export const useContent = () => {
	const { i18n } = useTranslation();

	switch (i18n.language) {
		case "de":
			return contentDe;
		case "en":
			return contentEn;
		default:
			return contentEn;
	}
};

export const contentEn = {};

export const contentDe = {};
