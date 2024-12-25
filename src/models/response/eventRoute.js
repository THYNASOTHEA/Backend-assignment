
module.exports = {
    upload: {
        201: {
            message: {
                type: 'Event created',
            }
        },
        500: {
            internal: {
                type: 'Internal server error!'
            }
        }
    },
    getAll: {
        201: {
            message: {
                type: 'All Events received',
            }
        },
        500: {
            internal: {
                type: 'Internal server error!'
            }
        }
    },
    getEventById: {
        201: {
            message: {
                type: 'All Events received',
            }
        },
        500: {
            internal: {
                type: 'Internal server error!'
            }
        }
    },
    editEvent: {
        200: {
            message: {
                type: 'Event updated successfully',
            }
        },
        500: {
            internal: {
                type: 'Internal server error!'
            }
        }
    },
    
}