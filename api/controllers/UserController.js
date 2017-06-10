/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
		/**
		 * Show all user
		 * @param  {response} req
		 * @param  {request} res
		 * @return {response}
		 */
		index: function(req, res) {
        User.find().exec(function(err, users) {
            if (err) { return res.serverError(err); }
            return res.view('user/index', { users: users });
        });
    },
		/**
		 * Show all user
		 * @param  {response} req
		 * @param  {request} res
		 * @return {response}
		 */
		create: function(req, res) {
			return res.view('user/create');
		},
		/**
		 * Show all user
		 * @param  {response} req
		 * @param  {request} res
		 * @return {response}
		 */
		store: function(req, res) {
			User.create(req.body).exec(function (err, records) {
				return res.redirect('/');
			});
		},
		/**
		 * Show all user
		 * @param  {response} req
		 * @param  {request} res
		 * @return {response}
		 */
		edit: function(req, res) {
			User.findOne({'id': req.param('id')}).exec(function(err, user) {
				if (err) { return res.serverError(errr); }
				return res.view('user/show', {user: user});
			});
		},
		/**
		 * Show all user
		 * @param  {response} req
		 * @param  {request} res
		 * @return {response}
		 */
		update: function(req, res) {
			User.update({id:req.param('id')},req.body).exec(function afterwards(err, updated){
				if (err) { return res.serverError(errr); }
				return res.redirect('/');
			});
		},
		/**
		 * Show all user
		 * @param  {response} req
		 * @param  {request} res
		 * @return {response}
		 */
		delete: function(req, res) {
			User.destroy({id:req.param('id')}).exec(function afterwards(err, updated){
				if (err) { return res.serverError(errr); }
				return res.redirect('/');
			});
		}
};
