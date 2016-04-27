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
      host: "pg-sandbox.paymaya.com",
      path: "/payments/v1/payments",
      publicApiKey: "pk-N6TvoB4GP2kIgNz4OCchCTKYvY5kPQd2HDRSg8rPeQG",
      secretApiKey: "sk-9lRmFTV8BIdxoXWm5liDAlKF0yL4gZzwmDQAmnvxWOF"
    }

  },

  cardVault: {

    sandbox: {
      host: "https://pg-sandbox.paymaya.com",
      secretApiKey: "sk-9lRmFTV8BIdxoXWm5liDAlKF0yL4gZzwmDQAmnvxWOF",
      customers: {
        get: "/payments/v1/customers/{customer_id}",
        post: "/payments/v1/customers"
      },
      cards: {
        vault: "/payments/v1/customers/{customer_id}/cards",
        list: "/payments/v1/customers/{customer_id}/cards"
      }
    }

  }

};
