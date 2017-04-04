import l10n from '../l10n/localization';

export default {
    name: {
        presence: {
            message: l10n.validation.required
        },
    },
    capacity: {
        presence: {
            message: l10n.validation.required
        },
        numericality: {
            onlyInteger: true,
            greaterThan: 0,
            message: l10n.validation.numberGreaterThanZero
        }
    },
    address: {
        presence: {
            message: l10n.validation.required
        },
    },
    phone: {
        presence: {
            message: l10n.validation.required
        },
    },
    website: {
        url: {
            allowEmpty: true,
            message: l10n.validation.url
        }
    },
    image: {
        url: {
            allowEmpty: true,
            message: l10n.validation.url
        }
    }
};