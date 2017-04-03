import l10n from '../l10n/localization';

export default {
    name: {
        presence: {
            message: l10n.validation.required
        },
    },
    capacity: {
        numericality: {
            onlyInteger: true,
            greaterThan: 0,
            message: l10n.validation.numberGreaterThanZero
        }
    },
    website: {
        presence: {
            allowEmpty: true
        },
        url: {
            message: l10n.validation.url
        }
    },
    image: {
        presence: {
            allowEmpty: true
        },
        url: {
            message: l10n.validation.url
        }
    }
};