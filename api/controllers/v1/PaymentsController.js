/**
 * PaymentsController
 *
 * @description :: Server-side logic for managing Payments
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	create: function(req, res) {
		var paymentToken = req.body.paymentToken || "";

		if ( !paymentToken ) {
			return res.badRequest("Missing Payment Token");
		}

		PaymentsHelper.requestPayments(paymentToken, function(err, result) {
			if (err) {
				return res.serverError(err);
			}

			return res.json(JSON.parse(result));
		});
	}

};
