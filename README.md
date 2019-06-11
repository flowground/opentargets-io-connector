# ![LOGO](logo.png) Open Targets Platform **flow**ground Connector

## Description

A generated **flow**ground connector for the Open Targets Platform API (version 3.0.2).

Generated from: https://api.apis.guru/v2/specs/opentargets.io/3.0.2/swagger.json<br/>
Generated at: 2019-06-06T16:12:54+03:00

## API Description

### The Open Targets Platform REST API

The Open Targets Platform API ('Application Programming Interface')
allows programmatic retrieval of our data via a set of
[REST](https://en.wikipedia.org/wiki/Representational_state_transfer)
services.

You can make calls to the latest version of our API using the base URL
`https://api.opentargets.io/v3/platform`. Please make sure you use `https`
instead of the unencrypted `http` calls, which we do not accept.

Continue reading below or [try query in the interactive interface](https://api.opentargets.io/v3/platform/docs/swagger-ui)

Note that we only serve the latest version of the API. If you are interested in querying an
old version, please [get in touch](mailto:support@targetvalidation.org) so that
we can help.

We list below the methods available for you to query our data directly from the API. These methods will be
automatically generated from our Swagger UI. For every request you create, the interface will display a [curl](https://curl.haxx.se/) command
that you can copy and paste directly to a shell to obtain the same results without using an internet browser.

Check our [API blog posts](https://blog.opentargets.org/tag/api), for tutorials and additional
information on how to access of our data programmatically.

### Available Methods

The available methods can be grouped in four types:

* __public__ - Methods that serve the core set of our data. These are stable and we fully supported them.
* __private__ - Methods used by the web app to serve additional data not specific to our platform. These methods
may change without notice and should be used with caution.
* __utils__ - Methods to get statistics and technical data about our API.

### Supported formats

The four methods above are all available via a `GET` request, and will serve outputs as `JSON`.
Alternative output formats such `xml`, `csv` and `tab` are also available for some of the methods.
Please note that alternative output formats are not supported in this interactive page. The response here will always be in `json` format.

If you have complex queries with large number of parameters, you should
use a `POST` request instead of  `GET`. `POST` methods require a body encoded as `json`.
When querying for a specific disease using the latest version of the API, your call would look like the example below:

```sh
curl -X POST -d '{"disease":["EFO_0000253"]}' --header 'Content-Type: application/json' https://api.opentargets.io/v3/platform/public/evidence/filter
```
### How to interpret a response

Each HTTP response will serve data in headers and body.
The headers will give you details about your query, such as how long it took to run, and how much usage you have left (See the 'Fair Usage
and API keys' section below for more details).

In the body of the response, you will find the data you have requested for in a `json` format. The
[jq](https://stedolan.github.io/jq/) program is a useful tool to parse the json response while on the command line.

```sh
curl https://api.opentargets.io/v3/platform/public/association/filter\?target\=ENSG00000157764 | jq
```

We do not analyse the nature of any specific API queries except for the purposes of improving the performance of our API.
Read more in our [privacy section](https://www.targetvalidation.org/terms_of_use#privacy).

How can we make the Open Targets Platform API more useful to you? Would you like additional methods to be implemented?
Please [get in touch](mailto:support@targetvalidation.org) and send your suggestions.

### More examples
Check our [Getting started tutorial](https://blog.opentargets.org/api-getting-started-1) for more
examples on how to use the API and for some code snippets, which can be used to construct more complex queries.


## Authorization

This API does not require authorization.

## Actions

### Browse API documentation

> Access api docs as served by Redoc

*Tags:* `private`

### Browse interactive API documentation

> Interactive API docs using swagger-ui

*Tags:* `private`

### Get `autocomplete` objects.

> Search for the closest term to autocomplete in the search box.

*Tags:* `private`

#### Input Parameters
* `q` - _required_ - A full text query.
* `size` - _optional_ - Maximum amount of results to return. Defaults to 5.

### Find the best hit

> Fire the search method for multiple strings

*Tags:* `private`

### Find information about a list of diseases

> Get `disease` objects.

*Tags:* `private`

### Find information about a disease

> Get `disease` objects.

*Tags:* `private`

#### Input Parameters
* `disease` - _required_ - An EFO identifier.

### Get evidence code by ID

> Get `ECO` objects.

*Tags:* `private`

#### Input Parameters
* `ECO_ID` - _required_ - An [evidence code ontology](http://www.ebi.ac.uk/ols/v2/browse.do?ontName=ECO) ID.

### Enrichment analysis

> Returns an enrichment analysis for a list of targets passed in the body

*Tags:* `private`

### Search most relevant results

> Get `search-result` objects. Enables search bar functionality.

*Tags:* `private`

#### Input Parameters
* `q` - _required_ - A full text query.
* `size` - _optional_ - Maximum amount of results to return. Defaults to 5.

### Find related entities

> Get `relation` objects.

*Tags:* `private`

### Find related entities by disease

> Get `relation` objects starting from diseases.

*Tags:* `private`

#### Input Parameters
* `disease` - _required_ - An EFO gene identifier.

### Find related entities by target

> Get `relation` objects starting from diseases.

*Tags:* `private`

#### Input Parameters
* `target` - _required_ - An Ensembl gene identifier.

### Find information about a list of targets

> Get `target` objects. Used for the target profile page.

*Tags:* `private`

### Query expression levels

> Get `gene-expression` objects.

*Tags:* `private`

#### Input Parameters
* `gene` - _required_ - An Ensembl gene identifier.

### Batch query expression levels

> Get `gene-expression` objects.

*Tags:* `private`

### Find information about a target

> Get `target` objects.

*Tags:* `private`

#### Input Parameters
* `target` - _required_ - An Ensembl gene ID for the target of interest.

### Get association by id

> Once we integrate all evidence connecting a target to a specific disease, we<br/>
>  compute an association score by the means of an harmonic sum. This *association score* provides<br/>
>  an indication of how strong the evidence behind each connection is and can be<br/>
>  used to rank genes in order of likelihood as drug targets.<br/>
>  The association ID is constructed by using the Ensembl ID of the gene and the<br/>
>  EFO ID for the disease (e.g. ENSG00000073756-EFO_0003767).<br/>
>  The method returns an association object, which contains the data and summary<br/>
>  on each evidence type included in the calculation of the score, as well as the score itself.

*Tags:* `public` `retrieve`

#### Input Parameters
* `id` - _required_ - An association ID usually in the form of `TARGET_ID-DISEASE_ID`.

### Filter available associations

> More complex queries for associations scores and objects can be done using<br/>
> this method, which allows to sort in different order, restrict to a specific class<br/>
> of diseases or targets, as well as filtering results by score and associated pathways.

*Tags:* `public` `filter`

#### Input Parameters
* `target` - _optional_ - A target identifier listed as target.id.
* `disease` - _optional_ - An EFO code listed as disease.id.
* `therapeutic_area` - _optional_ - An EFO code of a therapeutic area.
* `datasource` - _optional_ - Data source to consider.
* `datatype` - _optional_ - Data type to consider.
* `pathway` - _optional_ - A Reactome pathway identifier (returning only those targets linked to the specified pathway).
* `target_class` - _optional_ - A ChEMBL target class identifier (returning only those targets belonging to the specified class).
* `uniprotkw` - _optional_ - A UniProt keyword (meaning all the targets linked to that keyword).
* `direct` - _optional_ - If `true`, it returns associations that have at least one direct evidence connecting the target and the disease. If `false` it only returns associations for which there is no direct evidence connecting the target and the disease, but only evidence connecting the target to a children of the disease in the EFO ontology.
* `datastructure` - _optional_ - Type of data structure to return. Can be 'full', 'simple', 'ids', or 'count'.
* `fields` - _optional_ - Fields you want to retrieve. This will get priority over the data structure requested.
* `facets` - _optional_ - Returns facets
* `scorevalue_min` - _optional_ - Filter by minimum score value. The default is 0, but using 0.2 is a good trade-off to filter lower quality data points.
* `scorevalue_max` - _optional_ - Filter by maximum score value.
* `scorevalue_types` - _optional_ - Score types to apply the score value min and max filters. The default is `overall`.
* `size` - _optional_ - Maximum amount of results to return. Defaults to 10, max is 10000.
* `from` - _optional_ - How many initial results should be skipped. Defaults to 0.
* `format` - _optional_ - Format to get the data back. Can be 'json', 'xml', 'tab' or 'csv'. **Note** that this option can only be used when calling the API directly and will not work in this page. The response here will always be JSON.
* `sort` - _optional_ - Sort by the given score type. Defaults to 'overall' and descending order. Use '~' prefix to do ascending
order e.g. '~overall'. You will call a data type score like: 'datatypes.literature', and a data source as
'datasources.gwas'. Supports multiple entries.

* `search` - _optional_ - Restrict the filtered results to those matching the passed string. The matching is done with a
phrase match prefix.


### Batch query available associations

> Complex queries and filters for association objects can also be submitted using a JSON<br/>
> object and the equivalent POST method.

*Tags:* `public` `filter`

### Get evidence by ID

> We call **evidence** a unit of data that support a connection between a target and a disease.<br/>
> The Open Targets Platform integrates multiple types of evidence including genetic associations,<br/>
> somatic mutations, RNA expression and target-disease associations mined from the literature.<br/>
> This method allows you to retrieve a single evidence item or a list of pieces of evidence by using their<br/>
> targetvalidation.org ID.<br/>
> <br/>
> Evidence IDs are unique within each data release (e.g. `8ed3d7568a8c6cac9c95cfb869bac762` for release 1.2).<br/>
> You can obtain a list of evidence and their IDs from other API calls such as [/public/evidence/filter](#!/public/get_public_evidence_filter).<br/>
> <br/>
> **Please note** that a specific evidence ID may change between data releases. We can not guarantee that a specific evidence ID will refer to the same piece of evidence connecting a target and its diseases.

*Tags:* `public` `retrieve`

#### Input Parameters
* `id` - _required_ - Internal unique ID of the evidence string to retrieve.

### Get evidence for a list of IDs

> This is the POST version of [/public/evidence](#!/public/get_public_evidence).<br/>
> It allows to query for a list of evidence strings encoded in a `json` object to be passed in the body.

*Tags:* `public` `retrieve`

### Filter available evidence

> The filter method allows to retrieve the specific data that supports a connection between targets and diseases.<br/>
> Filters can be used to restrict the results by source and type of data,<br/>
> or limit results to targets which are part of a particular pathway.<br/>
> Minimum and maximum scores can be specified as well as the type of evidence linking target and disease.<br/>
> **Note** that multiple genes and diseases can be specified in the same request.

*Tags:* `public` `filter`

#### Input Parameters
* `target` - _optional_ - A target identifier listed as target.id.
* `disease` - _optional_ - An EFO code listed as disease.id.
* `data source` - _optional_ - Data source to consider.
* `datatype` - _optional_ - Data type to consider.
* `pathway` - _optional_ - A pathway identifier (meaning all the targets linked to that pathway).
* `uniprotkw` - _optional_ - A UniProt keyword (meaning all the targets linked to that keyword).
* `datastructure` - _optional_ - Type of data structure to return. Can be 'full', 'simple', 'ids', or 'count'.
* `fields` - _optional_ - The fields you want to retrieve. This will get priority over the data structure requested.
* `scorevalue_min` - _optional_ - Filter by minimum score value. The default is 0, but using 0.2 is a good trade-off to filter lower quality data points.
* `scorevalue_max` - _optional_ - Filter by maximum score value.
* `sort` - _optional_ - Sort by the given field. The default is 'scores.association_score' in descending order. Use '~' prefix to do ascending
order e.g. '~scores.association_score'. It supports multiple entries.

* `size` - _optional_ - Maximum amount of results to return. Defaults to 10, max is 10000.
* `from` - _optional_ - How many initial results should be skipped. Defaults to 0.
* `format` - _optional_ - Format to get the data back. Can be 'json', 'xml', 'tab' or 'csv'. **Note** that this option can only be used when calling the API directly and will not work in this page. The response here will always be JSON.

### Batch filter available evidence

> POST version of [/public/evidence/filter](#!/public/get_public_evidence_filter).<br/>
> Filters can be specified as part of a `json` object in the body, simplifying the submission of queries.

*Tags:* `public` `filter`

### Search for a disease or a target

> This method allows you to look for gene or diseases of interest using a free text search,<br/>
> replicating the functionality of the search box on our homepage. It should be used to identify<br/>
> the best match for a disease or target of interest, rather than gathering a specific set of evidence.

*Tags:* `public` `search`

#### Input Parameters
* `q` - _required_ - A full text query.
* `size` - _optional_ - Maximum amount of results to return. Defaults to 10, max is 10000.
* `from` - _optional_ - How many initial results should be skipped. Defaults to 0.
* `filter` - _optional_ - Restrict the search to the type requested. Eg. `target` or `disease`.

### Get metrics about the current data release

> Returns the metrics about associations and evidences, divided by datasource, genes and so on.

*Tags:* `public` `utils`

### Ping service

> Check if the API is up

*Tags:* `public` `utils`

### Get statistics about the current data release

> Returns the number of associations and evidences, divided by datasource.

*Tags:* `public` `utils`

### Get API version

> Returns current API version.

*Tags:* `public` `utils`

### Get OpenAPI schema

> Get swagger.yaml specs for the API

*Tags:* `private`

## License

**flow**ground :- Telekom iPaaS / opentargets-io-connector<br/>
Copyright © 2019, [Deutsche Telekom AG](https://www.telekom.de)<br/>
contact: flowground@telekom.de

All files of this connector are licensed under the Apache 2.0 License. For details
see the file LICENSE on the toplevel directory.
