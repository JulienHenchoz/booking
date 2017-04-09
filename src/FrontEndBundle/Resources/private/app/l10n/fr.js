export default {
    save: 'Enregistrer',

    venue_title: 'Salle',
    venues_title: 'Salles',
    venue: 'salle',
    venues: 'salles',

    event_title: 'Événement',
    events_title: 'Événements',
    incoming_events_title: 'Événements à venir',
    past_events_title: 'Événements passés',
    incoming_events: 'Événements à venir',
    past_events: 'Événements passés',
    event: 'événement',
    events: 'événements',

    booking_title: 'Réservation',
    bookings_title: 'Réservations',
    booking: 'réservation',
    bookings: 'réservations',

    /** Headers **/
    editing: 'Edition de "{0}"',
    new_venue: 'Nouvelle salle',
    new_event: 'Nouvel événement',
    new_booking: 'Nouvelle réservation',

    /** Toast messages **/
    could_not_save_element: 'Impossible de sauver l\'élément !',
    save_success: 'L\'élément a été sauvegardé avec succès !',
    save_error: 'Impossible de sauver l\'élément !',
    remove_success: 'L\'élément a été supprimé avec succès !',
    remove_error: 'Impossible de supprimer l\'élément !',
    validation_errors: 'Certains champs sont invalides, merci de vérifier les données et valider à nouveau.',

    venues_fetch_error: 'Une erreur est survenue lors de la récupération de la liste des salles.',
    venue_fetch_error: 'Une erreur est survenue lors de la récupération de la salle.',

    events_fetch_error: 'Une erreur est survenue lors de la récupération de la liste des événements.',
    event_fetch_error: 'Une erreur est survenue lors de la récupération de l\'événement.',

    bookings_fetch_error: 'Une erreur est survenue lors de la récupération de la liste des réservations.',
    booking_fetch_error: 'Une erreur est survenue lors de la récupération de la réservation.',
    bookings_event_fetch_error: 'Impossible de récupérer les détails de l\'événement.',

    change_booking_status_error: 'Impossible de changer le statut de la réservation.',
    change_booking_status_success: 'Statut de la réservation modifié avec succès !',

    dashboard_fetch_error: 'Impossible de récupérer les données du dashboard !',

    no_events: 'Aucun événement à afficher pour le moment.',
    no_bookings: 'Aucune réservation pour le moment.',

    /** Buttons **/
    btn_confirm: 'Confirmer',
    btn_cancel: 'Annuler',
    venue_select_default: 'Choisissez une salle...',

    /** Modals **/
    delete_venue_title: 'Supprimer la salle',
    delete_venue_content: 'Êtes-vous sûr de vouloir supprimer la salle "{0}" ?',

    delete_event_title: 'Supprimer l\'événement',
    delete_event_content: 'Êtes-vous sûr de vouloir supprimer l\'événement "{0}" ?',

    delete_booking_title: 'Supprimer la réservation',
    delete_booking_content: 'Êtes-vous sûr de vouloir supprimer la réservation "{0}" ?',

    /** Entity Fields **/
    fields: {
        venues: {
            name: 'Nom',
            capacity: 'Capacité',
            address: 'Adresse',
            phone: 'Téléphone',
            website: 'Site web',
            image: 'Lien de l\'image',
        },
        events: {
            name: 'Nom',
            startDate: 'Date/heure',
            venue: 'Salle',
            description: 'Description',
            image: 'Lien de l\'image',
        },
        bookings: {
            event: 'Evénement',
            subscribeDate: 'Date d\'inscription',
            firstName: 'Prénom',
            lastName: 'Nom',
            email: 'E-mail',
            phone: 'Téléphone',
            nbExpected: 'Nombre de personnes',
            subscribedToNewsletter: 'Inscription à la newsletter',
            persons: 'pers.',
        }
    },

    /** Validation message **/
    validation: {
        required: 'Ce champ est requis.',
        url: 'Ce champ doit être une adresse internet valide.',
        numberGreaterThanZero: 'Ce champ doit être un nombre plus grand que zéro.',
        email: 'Merci de saisir une adresse e-mail valide.'
    },

    tooltips: {
        edit: 'Editer',
        bookings: 'Réservations'
    },

    subscribed_on: 'Inscrit le',
    time_at: 'à',

    highlight_bookings: 'réservations',
    highlight_people: 'personnes',
    hightlight_seats_left: 'places restantes',

    dashboard: 'Dashboard',
    dashboard_incoming_events: 'spectacles à venir',
    dashboard_total_bookings: 'réservations au total',
    dashboard_expected_people: 'personnes attendues',
    dashboard_average_filling: 'remplissage moyen',
    dashboard_latest_bookings: 'Dernières réservations',
};
