/**
* Generated by PluginGenerator from webgme on Thu Jul 17 2014 16:46:10 GMT-0500 (Central Daylight Time).
*/

define(['plugin/PluginConfig', 'plugin/PluginBase', 'plugin/RequirementImporter/RequirementImporter/meta'], function (PluginConfig, PluginBase, MetaTypes) {
    'use strict';

    /**
    * Initializes a new instance of RequirementImporter.
    * @class
    * @augments {PluginBase}
    * @classdesc This class represents the plugin RequirementImporter.
    * @constructor
    */
    var RequirementImporter = function () {
        // Call base class' constructor.
        PluginBase.call(this);
        this.meta = null;
        this.metricMap = {};
    };

    // Prototypal inheritance from PluginBase.
    RequirementImporter.prototype = Object.create(PluginBase.prototype);
    RequirementImporter.prototype.constructor = RequirementImporter;

    /**
    * Gets the name of the RequirementImporter.
    * @returns {string} The name of the plugin.
    * @public
    */
    RequirementImporter.prototype.getName = function () {
        return "Requirement Importer";
    };

    /**
    * Gets the semantic version (semver.org) of the RequirementImporter.
    * @returns {string} The version of the plugin.
    * @public
    */
    RequirementImporter.prototype.getVersion = function () {
        return "0.1.0";
    };

    /**
    * Gets the description of the RequirementImporter.
    * @returns {string} The description of the plugin.
    * @public
    */
    RequirementImporter.prototype.getDescription = function () {
        return "Imports a requirement from a json representation.";
    };

    /**
     * Gets the configuration structure for the AcmImporter.
     * The ConfigurationStructure defines the configuration for the plugin
     * and will be used to populate the GUI when invoking the plugin from webGME.
     * @returns {object} The version of the plugin.
     * @public
     */
    RequirementImporter.prototype.getConfigStructure = function () {
        return [
            {
                "name": "requirement",
                "displayName": "Requirement",
                "description": "Existing requirements in json representation.",
                "value": "",
                "valueType": "asset",
                "readOnly": false
            }
        ];
    };
    /**
    * Main function for the plugin to execute. This will perform the execution.
    * Notes:
    * - Always log with the provided logger.[error,warning,info,debug].
    * - Do NOT put any user interaction logic UI, etc. inside this method.
    * - callback always has to be called even if error happened.
    *
    * @param {function(string, plugin.PluginResult)} callback - the result callback
    */
    RequirementImporter.prototype.main = function (callback) {
        // Use self to access core, project, result, logger etc from PluginBase.
        // These are all instantiated at this point.
        var self = this,
            config;

        if (!self.activeNode) {
            self.createMessage(null, 'Active node is not present! This happens sometimes... Loading another model ' +
                'and trying again will solve it most of times.');
            return callback('Active node is not present!', self.result);
        }

        if (self.isMetaTypeOf(self.activeNode, self.META.RequirementsFolder) === false) {
            self.createMessage(null, 'This plugin must be called from a WorkSpace.');
            return callback(null, self.result);
        }

        self.meta = MetaTypes;
        self.updateMETA(self.meta);
        config = self.getCurrentConfig();

        self.blobClient.getObject(config.requirement, function (err, requirementBuffer) {
            var reqStr,
                reqJson;
            if (err) {
                self.createMessage(null, 'Could not obtain file from blob.');
                return callback(null, self.result);
            }
            reqStr = String.fromCharCode.apply(null, new Uint8Array(requirementBuffer));
            try {
                reqJson = JSON.parse(reqStr);
            } catch (exc) {
                self.logger.error('Could not parse given file as json, err: ' + exc.message);
                self.createMessage(null, 'Could not parse given file as json, err: ' + exc.message);
                return callback(null, self.result);
            }
            self.buildRequirementRec(reqJson, self.activeNode, 0);
            self.result.setSuccess(true);
            self.save('added obj', function (err) {
                callback(null, self.result);
            });
        });
    };

    RequirementImporter.prototype.buildRequirementRec = function (req, parent, siblingNbr) {
        var self = this,
            node,
            isCategory,
            i;
        if (req.hasOwnProperty('children')) {
            node = self.core.createNode({parent: parent, base: self.meta.RequirementCategory});
            isCategory = true;
        } else {
            node = self.core.createNode({parent: parent, base: self.meta.Requirement});
            if (req.hasOwnProperty('KPP')) {
                self.core.setAttribute(node, 'KPP', req.KPP);
            }
            if (req.hasOwnProperty('objective')) {
                self.core.setAttribute(node, 'objective', req.objective);
            }
            if (req.hasOwnProperty('threshold')) {
                self.core.setAttribute(node, 'threshold', req.threshold);
            }
            if (req.hasOwnProperty('function')) {
                self.core.setAttribute(node, 'function', req.function);
            }
        }
        // Common attributes
        self.core.setAttribute(node, 'name', req.name);
        self.core.setRegistry(node, 'position', {x: 100, y: 100 + 100 * siblingNbr});
        if (req.hasOwnProperty('weight')) {
            self.core.setAttribute(node, 'weight', req.weight);
        }
        if (req.hasOwnProperty('weightNeg')) {
            self.core.setAttribute(node, 'weightNeg', req.weightNeg);
        }
        if (req.hasOwnProperty('Priority')) {
            self.core.setAttribute(node, 'Priority', req.Priority);
        }
        if (req.hasOwnProperty('description')) {
            self.core.setAttribute(node, 'description', req.description);
        }

        if (isCategory) {
            for (i = 0; i < req.children.length; i += 1) {
                self.buildRequirementRec(req.children[i], node, i);
            }
        }
    };

    return RequirementImporter;
});