'use strict';

/**
 * flagship service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::flagship.flagship');
