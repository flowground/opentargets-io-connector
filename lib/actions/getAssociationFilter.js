/**
 * Auto-generated action file for "Open Targets Platform" API.
 *
 * Generated at: 2019-06-06T13:12:54.522Z
 * Mass generator version: 1.1.0
 *
 * flowground :- Telekom iPaaS / opentargets-io-connector
 * Copyright © 2019, Deutsche Telekom AG
 * contact: flowground@telekom.de
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: 'getAssociationFilter'
 * Endpoint Path: '/platform/public/association/filter'
 * Method: 'get'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [
    "target",
    "disease",
    "therapeutic_area",
    "datasource",
    "datatype",
    "pathway",
    "target_class",
    "uniprotkw",
    "direct",
    "datastructure",
    "fields",
    "facets",
    "scorevalue_min",
    "scorevalue_max",
    "scorevalue_types",
    "size",
    "from",
    "format",
    "sort",
    "search"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "target": "target",
    "disease": "disease",
    "therapeutic_area": "therapeutic_area",
    "datasource": "datasource",
    "datatype": "datatype",
    "pathway": "pathway",
    "target_class": "target_class",
    "uniprotkw": "uniprotkw",
    "direct": "direct",
    "datastructure": "datastructure",
    "fields": "fields",
    "facets": "facets",
    "scorevalue_min": "scorevalue_min",
    "scorevalue_max": "scorevalue_max",
    "scorevalue_types": "scorevalue_types",
    "size": "size",
    "from": "from",
    "format": "format",
    "sort": "sort",
    "search": "search"
};

function processAction(msg, cfg) {
    var isVerbose = process.env.debug || cfg.verbose;

    if (isVerbose) {
        console.log(`---MSG: ${JSON.stringify(msg)}`);
        console.log(`---CFG: ${JSON.stringify(cfg)}`);
        console.log(`---ENV: ${JSON.stringify(process.env)}`);
    }

    const contentType = undefined;

    const body = msg.body;
    mapFieldNames(body);

    let parameters = {};
    for(let param of PARAMETERS) {
        parameters[param] = body[param];
    }

    // credentials for this operation
    let securities = {};

    let callParams = {
        spec: spec,
        operationId: 'getAssociationFilter',
        pathName: '/platform/public/association/filter',
        method: 'get',
        parameters: parameters,
        requestContentType: contentType,
        requestBody: body.requestBody,
        securities: {authorized: securities},
        server: spec.servers[cfg.server] || cfg.otherServer,
    };

    if (isVerbose) {
        let out = Object.assign({}, callParams);
        out.spec = '[omitted]';
        console.log(`--SWAGGER CALL: ${JSON.stringify(out)}`);
    }

    // Call operation via Swagger client
    return Swagger.execute(callParams).then(data => {
        // emit a single message with data
        this.emitData(data);

        // if the response contains an array of entities, you can emit them one by one:

        // data.obj.someItems.forEach((item) => {
        //     this.emitData(item);
        // }
    });
}

function mapFieldNames(obj) {
    if(Array.isArray(obj)) {
        obj.forEach(mapFieldNames);
    }
    else if(typeof obj === 'object' && obj) {
        Object.keys(obj).forEach(key => {
            mapFieldNames(obj[key]);

            let goodKey = FIELD_MAP[key];
            if(goodKey && goodKey !== key) {
                obj[goodKey] = obj[key];
                delete obj[key];
            }
        });
    }
}