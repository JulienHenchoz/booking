import l10n from '../l10n/localization';

export default {
    firstName: {
        presence: {
            message: l10n.validation.required
        },
    },
    lastName: {
        presence: {
            message: l10n.validation.required
        },
    },
    email: {
        presence: {
            message: l10n.validation.required
        },
        email: {
            message: l10n.validation.email
        }
    },
    nbExpected: {
        presence: {
            message: l10n.validation.required
        },
        numericality: {
            onlyInteger: true,
            greaterThan: 0,
            message: l10n.validation.numberGreaterThanZero
        }
    },
};
