/**
 * Development environment settings
 *
 * This file can include shared settings for a development team,
 * such as API keys or remote database passwords.  If you're using
 * a version control solution for your Sails app, this file will
 * be committed to your repository unless you add it to your .gitignore
 * file.  If your repository will be publicly viewable, don't add
 * any private information to this file!
 *
 */

module.exports = {

  /***************************************************************************
   * Set the default database connection for models in the development       *
   * environment (see config/connections.js and config/models.js )           *
   ***************************************************************************/

  // models: {
  //   connection: 'someMongodbServer'
  // }

  payments: {

    sandbox: {
      host: "api.paymaya.com",
      path: "/sandbox/payments/v1/payments",
      publicApiKey: "pk-sHQWci2P410ppwFQvsi7IQCpHsIjafy74jrhYb8qfxu",
      //<ADD SECRET API KEY>
      secretApiKey: "sk-4Wub7pHVixHR8lm7vgdxgMq23TDJcms8EMEobM80uoo"
    }

  }

};
