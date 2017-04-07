import l10n from '../l10n/localization';

export default {
    name: {
        presence: {
            message: l10n.validation.required
        },
    },
    image: {
        url: {
            allowEmpty: true,
            message: l10n.validation.url
        }
    },
    'venue.id': {
        presence: {
            message: l10n.validation.required
        },
        numericality: {
            onlyInteger: true,
            greaterThan: 0,
            message: l10n.validation.numberGreaterThanZero
        }
    }
};
