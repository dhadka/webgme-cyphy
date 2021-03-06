/* global define,require */
/**
* Generated by MockModelGenerator from webgme on Wed Dec 10 2014 12:16:51 GMT-0600 (Central Standard Time).
*/

define([], function () {
    'use strict';
    return function (core) {
        var meta = {};

        meta.FCO = core.createNode({});
        core.setAttribute(meta.FCO, 'name', 'FCO');

        meta.ACMFolder = core.createNode({base: meta.FCO});
        core.setAttribute(meta.ACMFolder, 'name', 'ACMFolder');

        meta.ADMEditorModelingLanguage = core.createNode({base: meta.FCO});
        core.setAttribute(meta.ADMEditorModelingLanguage, 'name', 'ADMEditorModelingLanguage');

        meta.ADMFolder = core.createNode({base: meta.FCO});
        core.setAttribute(meta.ADMFolder, 'name', 'ADMFolder');

        meta.ATMFolder = core.createNode({base: meta.FCO});
        core.setAttribute(meta.ATMFolder, 'name', 'ATMFolder');

        meta.AVMComponentModel = core.createNode({base: meta.FCO});
        core.setAttribute(meta.AVMComponentModel, 'name', 'AVMComponentModel');

        meta.AVMTestBenchModel = core.createNode({base: meta.FCO});
        core.setAttribute(meta.AVMTestBenchModel, 'name', 'AVMTestBenchModel');

        meta.AssemblyRoot = core.createNode({base: meta.FCO});
        core.setAttribute(meta.AssemblyRoot, 'name', 'AssemblyRoot');

        meta.Connector = core.createNode({base: meta.FCO});
        core.setAttribute(meta.Connector, 'name', 'Connector');

        meta.ConnectorComposition = core.createNode({base: meta.FCO});
        core.setAttribute(meta.ConnectorComposition, 'name', 'ConnectorComposition');

        meta.Container = core.createNode({base: meta.FCO});
        core.setAttribute(meta.Container, 'name', 'Container');

        meta.DesertConfiguration = core.createNode({base: meta.FCO});
        core.setAttribute(meta.DesertConfiguration, 'name', 'DesertConfiguration');

        meta.DesertConfigurationSet = core.createNode({base: meta.FCO});
        core.setAttribute(meta.DesertConfigurationSet, 'name', 'DesertConfigurationSet');

        meta.DomainPort = core.createNode({base: meta.FCO});
        core.setAttribute(meta.DomainPort, 'name', 'DomainPort');

        meta.DomainModel = core.createNode({base: meta.FCO});
        core.setAttribute(meta.DomainModel, 'name', 'DomainModel');

        meta.Formula = core.createNode({base: meta.FCO});
        core.setAttribute(meta.Formula, 'name', 'Formula');

        meta.Metric = core.createNode({base: meta.FCO});
        core.setAttribute(meta.Metric, 'name', 'Metric');

        meta.PortMap = core.createNode({base: meta.FCO});
        core.setAttribute(meta.PortMap, 'name', 'PortMap');

        meta.Property = core.createNode({base: meta.FCO});
        core.setAttribute(meta.Property, 'name', 'Property');

        meta.RequirementBase = core.createNode({base: meta.FCO});
        core.setAttribute(meta.RequirementBase, 'name', 'RequirementBase');

        meta.RequirementsFolder = core.createNode({base: meta.FCO});
        core.setAttribute(meta.RequirementsFolder, 'name', 'RequirementsFolder');

        meta.Result = core.createNode({base: meta.FCO});
        core.setAttribute(meta.Result, 'name', 'Result');

        meta.Settings = core.createNode({base: meta.FCO});
        core.setAttribute(meta.Settings, 'name', 'Settings');

        meta.Task = core.createNode({base: meta.FCO});
        core.setAttribute(meta.Task, 'name', 'Task');

        meta.Test = core.createNode({base: meta.FCO});
        core.setAttribute(meta.Test, 'name', 'Test');

        meta.ValueFlowComposition = core.createNode({base: meta.FCO});
        core.setAttribute(meta.ValueFlowComposition, 'name', 'ValueFlowComposition');

        meta.Workflow = core.createNode({base: meta.FCO});
        core.setAttribute(meta.Workflow, 'name', 'Workflow');

        meta.WorkSpace = core.createNode({base: meta.FCO});
        core.setAttribute(meta.WorkSpace, 'name', 'WorkSpace');

        meta.CustomFormula = core.createNode({base: meta.Formula});
        core.setAttribute(meta.CustomFormula, 'name', 'CustomFormula');

        meta.Requirement = core.createNode({base: meta.RequirementBase});
        core.setAttribute(meta.Requirement, 'name', 'Requirement');

        meta.RequirementCategory = core.createNode({base: meta.RequirementBase});
        core.setAttribute(meta.RequirementCategory, 'name', 'RequirementCategory');

        meta.SimpleFormula = core.createNode({base: meta.Formula});
        core.setAttribute(meta.SimpleFormula, 'name', 'SimpleFormula');

        return meta;
    };
});