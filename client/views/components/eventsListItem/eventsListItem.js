Template.eventsListItem.events({
	'click .btn-default': function (e) {
		Events.update(this._id,{ $set: {active: true} })
	},	
	'click .btn-primary': function (e) {
		Events.update(this._id,{ $set: {active: false} })
	},
	'click .btn-danger': function (e) {
		Events.remove(this._id)
	}
});