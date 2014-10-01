angular.module("cyphy.components.templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("/cyphy-components/templates/DesignList.html","<div class=\"design-list\">\r\n    <item-list list-data=\"listData\" config=\"config\" class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\"></item-list>\r\n</div>");
$templateCache.put("/cyphy-components/templates/DesignTree.html","<div class=\"design-tree\">\r\n    <tree-navigator tree-data=\"treeData\" config=\"config\"></tree-navigator>\r\n</div>");
$templateCache.put("/cyphy-components/templates/TestBenchList.html","<div class=\"test-bench-list\">\r\n    <item-list list-data=\"listData\" config=\"config\" class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\"></item-list>\r\n</div>");
$templateCache.put("/cyphy-components/templates/WorkspaceList.html","<div class=\"workspace-list\">\r\n    <item-list list-data=\"listData\" config=\"config\" class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\"></item-list>\r\n</div>");
$templateCache.put("/cyphy-components/templates/WorkspaceNewItem.html","<form class=\"drop-box new-order-set\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-3\">\r\n            <input type=\"text\" class=\"form-control\" data-ng-model=\"newItem.id\"\r\n                   placeholder=\"ID\">\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n            <input type=\"text\" class=\"form-control\" data-ng-model=\"newItem.title\"\r\n                   placeholder=\"New item name\">\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <textarea class=\"form-control edit-workspace-description\" rows=\"5\"\r\n                      data-ng-model=\"newItem.description\"\r\n                      placeholder=\"Description\"></textarea>\r\n        </div>\r\n    </div>\r\n    <div class=\"row form-footer\">\r\n        <div class=\"col-md-8\">\r\n            <button class=\"btn btn-default btn-submit btn-success\"\r\n                    data-ng-click=\"createItem(newItem)\">Create\r\n            </button>\r\n        </div>\r\n    </div>\r\n</form>");
$templateCache.put("/cyphy-components/templates/ComponentList.html","<div class=\"component-list\">\r\n    <item-list list-data=\"listData\" config=\"config\" class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\"></item-list>\r\n</div>");}]);