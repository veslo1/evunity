Template.eventsList.helpers({
	items: function () {
		return Events.find();
	}
});